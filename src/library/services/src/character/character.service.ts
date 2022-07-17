import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogService} from '@ngneat/dialog';
import {
  Alignment,
  CharacterAttributes,
  CharacterBackground,
  CharacterBackgroundsList,
  CharacterClass,
  CharacterClassesList,
  CharacterClassLevelList,
  CharacterClassName,
  CharacterRace,
  CharacterRacesList,
  CharacterSubRaceName,
  CharacterSubRacesList,
  CharacterTraits,
  CharacterVitals,
  Currency,
  DeathSavingThrowState,
  Dice,
  Equipment,
  HitPoints,
  Language,
  LevelLimits,
  LevelUpStrategy,
  OptionalCharacterAttributes,
  PlayerCharacterData,
  SkillName
} from '@app/models';
import {SettingsService} from '../settings.service';
import {AbilityHelper, ClassHelper, DiceHelper, EnumHelper} from '@app/helpers';
import {LanguagePickerComponent} from '../../../../app/components/modals/language-picker/language-picker.component';
import {CharacterSpellService} from './character-spell.service';
import {CharacterDataService} from './character-data.service';
import {CharacterProficiencyService} from './character-proficiency.service';
import {CharacterEquipmentService} from './character-equipment.service';

@Injectable({
  providedIn: 'root',
 })
 export class CharacterService implements OnDestroy {

  private _character: PlayerCharacterData;
  private readonly _characterSubscription: Subscription;

  constructor(
    private _dialogService: DialogService,
    private _settingsService: SettingsService,
    private _spellService: CharacterSpellService,
    private _dataService: CharacterDataService,
    private _proficiencyService: CharacterProficiencyService,
    private _equipmentService: CharacterEquipmentService
  ) {
    this._characterSubscription = this._dataService.character$.subscribe(
      char => this._character = char
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

  public saveCharacterToStorage(): void {
    this._dataService.saveCharacterToStorage();
  }

  public getCharacter(): PlayerCharacterData {
    if (!this._character) { this._dataService.createNewCharacter(); }

    return this._character;
  }

  public getClass(): CharacterClass {
    return CharacterClassesList.find(c => c.name === this._character.className);
  }

  /**
   * Get the feats for a character from his class, race, and subRace
   */
  public getCharacterFeats(): Array<CharacterTraits> {
    const feats: Array<CharacterTraits> = [];
    const charClass = CharacterClassesList.find(c => c.name === this._character.className);
    const race = CharacterRacesList.find(r => r.name === this._character.race);
    const subRace = CharacterSubRacesList.find(s => s.name === this._character.subRace);
    charClass?.feats?.forEach(ft => {
      feats.push(ft);
    });
    race?.feats?.forEach(ft => {
      feats.push(ft);
    });
    subRace?.feats?.forEach(ft => {
      feats.push(ft);
    });
    return feats;
  }

  /**
   * Override the character's background.
   * Handles the consequences of the background selection according to the list of CharacterBackgroundDetails
   */
  public setBackground(background: CharacterBackground): void {
    this._removeBackground();
    this._dataService.setPartial({background: background});

    const bg = CharacterBackgroundsList.find(b => b.name === background);

    if (bg.currency) {
      this.setCurrency(bg.currency);
    }
    if (bg.proficiencies?.length) {
      this.addSkills(bg.proficiencies);
    }
    if (bg.toolProficiencies?.length) {
      this._proficiencyService.addToolProficiencies(bg.toolProficiencies);
    }
    if (bg.instrumentProficiencies?.length) {
      this.addInstrumentProficiencies(bg.instrumentProficiencies);
    }
    if (bg.equipment?.length) {
      this.addEquipment(bg.equipment);
    }
    if (bg.pickableLanguages) {
      const modal = this._dialogService.open(LanguagePickerComponent, {
        data: {
          currentLanguages: this._character.proficiencies.languages,
          maxLanguages: bg.pickableLanguages
        }
      });
      const modalSubscription = modal.afterClosed$.subscribe((result: Array<Language>) => {
        this._dataService.setPartial({
          proficiencies: {
            ...this._character.proficiencies,
            languages: result
          }
        });
        modalSubscription.unsubscribe();
      });
    }
  }

  /**
   * Remove all bonuses from a character that are the result of a background
   */
  private _removeBackground(): void {
    const bg = CharacterBackgroundsList.find(b => b.name === this._character.background);

    if (!bg) { return; }

    let skills = { ...this._character.proficiencies.skills };
    let toolProficiencies = { ...this._character.proficiencies.tools };
    let instrumentProficiencies = { ... this._character.proficiencies.instruments };
    const languageProficiencies = { ... this._character.proficiencies.languages };

    if (this._character.proficiencies.skills?.length && bg.proficiencies?.length) {
      skills = this._character.proficiencies.skills.filter(
        skill => !bg.proficiencies.some(
          bgSkill => bgSkill === skill
        )
      );
    }
    if (this._character.proficiencies.tools?.length && bg.toolProficiencies?.length) {
      toolProficiencies = this._character.proficiencies.tools.filter(
        tool => !bg.toolProficiencies.some(
          bgTool => bgTool === tool
        )
      );
    }
    if (this._character.proficiencies.instruments?.length && bg.instrumentProficiencies?.length) {
      instrumentProficiencies = this._character.proficiencies.instruments.filter(
        inst => !bg.instrumentProficiencies.some(
          bgInst => bgInst === inst
        )
      );
    }
    if (bg.pickableLanguages && this._character.proficiencies.languages.length > bg.pickableLanguages + 1) {
      for (let i = 0; i < bg.pickableLanguages; i++) {
        languageProficiencies.pop();
      }
    }

    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        skills: skills,
        tools: toolProficiencies,
        languages: languageProficiencies,
        instruments: instrumentProficiencies
      },
      equipment: {
        equipped: [],
        backpack: []
      }
    });
  }

  public setClass(className: CharacterClassName): void {
    this._dataService.setPartial({
      className: className,
      spellSlots: this._spellService.getSpellSlots(className)
    });
    this._adjustSavingThrows();
    this._adjustHitPoints();
    this._adjustArmorClass();
  }

  private _getRacialBonuses(race: CharacterRace): OptionalCharacterAttributes {
    const details = ClassHelper.getRaceDetailsByName(race);
    const attributeBonus = {};

    EnumHelper.getAttributesKeyList().forEach((attribute) => {
      if (details.attributeBonus[attribute]) {
        Object.defineProperty(attributeBonus, attribute, {
          value: details.attributeBonus[attribute],
          writable: true
        });
      }
    });

    return attributeBonus;
  }

  private _getSubRaceRacialBonuses(
    subRace: CharacterSubRaceName,
    raceBonuses: OptionalCharacterAttributes
  ): OptionalCharacterAttributes {
    const subRaceDetails = ClassHelper.getSubRaceDetailsByName(subRace);

    EnumHelper.getAttributesKeyList().forEach((attribute) => {
      if (!raceBonuses[attribute] && subRaceDetails.attributeBonus[attribute]) {
        Object.defineProperty(raceBonuses, attribute, {
          value: subRaceDetails.attributeBonus[attribute],
          writable: true
        });
      } else if (raceBonuses[attribute] && subRaceDetails.attributeBonus[attribute]) {
        raceBonuses[attribute] = raceBonuses[attribute] + subRaceDetails.attributeBonus[attribute];
      }
    });

    return raceBonuses;
  }

  public setRace(race: CharacterRace): void {
    this._dataService.setPartial({
      race: race,
      subRace: undefined,
      appliedRacialBonuses: this._getRacialBonuses(race)
    });
  }

  public setSubRace(subRace: CharacterSubRaceName): void {
    this._dataService.setPartial({
      subRace: subRace,
      appliedRacialBonuses: this._getSubRaceRacialBonuses(subRace, {...this._character.appliedRacialBonuses})
    });
    this._adjustArmorClass();
  }

  /**
   * Override the character's experience points
   * TODO: handle level up
   */
  public setXp(xp: number): void {
    this._dataService.setPartial({xp: xp});
    this._setCharacterLevelByXp();
  }

  public setBaseAttributes(attributes: CharacterAttributes): void {
    if (!attributes) { return; }

    this._dataService.setPartial({baseAttributes: attributes});
    this._adjustHitPoints();
    this._adjustSavingThrows();
    this._adjustArmorClass();
  }

  public setAppliedRacialBonuses(attributes: OptionalCharacterAttributes): void {
    if (!attributes) { return; }

    this._dataService.setPartial({appliedRacialBonuses: attributes});
    this._adjustHitPoints();
    this._adjustSavingThrows();
    this._adjustArmorClass();
  }

  private _adjustSavingThrows(): void {
    console.warn('Adjusting Saving throws: NYI', this._character.className);
  }

  /**
   * Calculate and set a character's level from the character's current experience points
   */
  private _setCharacterLevelByXp(): void {
    const previousLevel = this._character.level;
    const nextLevel = LevelLimits.filter(limit => this._character.xp >= limit).length - 1;
    this._dataService.setPartial({level: nextLevel});
    this._adjustProficiencyBonus();
    this._adjustHitPoints();
    this._adjustHitDice(nextLevel - previousLevel);
  }

  private _adjustHitDice(levelDifference: number): void {
    const calculatedHitDice = Math.max(0, this._character.hitDice + levelDifference);
    this._dataService.setPartial({hitDice: calculatedHitDice});
  }

  private _adjustProficiencyBonus(): void {
    const bonus = CharacterClassLevelList.find(lv => lv.level === this._character.level).proficiencyBonus;
    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        proficiencyBonus: bonus ?? 1
      }
    });
  }

  private _adjustArmorClass(): void {
    const attributes = AbilityHelper.getAttributesTotal(this._character);
    const shieldBonus = this._character.shield ? 2 : 0;
    const nakedAc = 10 + AbilityHelper.getAbilityModifier(attributes.dex);
    let ac: number;

    switch (this._character.className) {
      case CharacterClassName.MONK:
        ac = nakedAc + AbilityHelper.getAbilityModifier(attributes.wis);
        break;
      case CharacterClassName.BARBARIAN:
        ac = nakedAc + shieldBonus + AbilityHelper.getAbilityModifier(attributes.con);
        break;
      default:
        ac = nakedAc + shieldBonus;
    }

    this._dataService.setPartial({ac: ac});
  }

  /**
   * Adjust hit points after character levels has changed
   * TODO: Adjust for certain Feats like Toughness
   */
  private _adjustHitPoints(): void {
    const characterClass: CharacterClass = CharacterClassesList.find(cls => cls.name === this._character.className);
    const initialHitPointsValue: number = DiceHelper.getMaxDieValue(characterClass.hitDie);
    const hitPoints: HitPoints = {
        max: initialHitPointsValue,
        current: initialHitPointsValue,
        levelHistory: [initialHitPointsValue]
    };

    if (this._character.level > 1) {
      const hitPointsPerLevel =
        AbilityHelper.getAbilityModifier(AbilityHelper.getAttributesTotal(this._character).con)
        + this._getLevelUpHitPoints(characterClass.hitDie);

      for (let i = 1; i < this._character.level; i++) {
        hitPoints.levelHistory.push(hitPointsPerLevel);
        hitPoints.max += hitPointsPerLevel;
      }
      hitPoints.current = hitPoints.max;
    }
    hitPoints.temp = 0;

    this._dataService.setPartial({hitPoints: hitPoints});
  }

  public takeDamage(damage: number): void {
    const hitPoints = Math.min(
      Math.max(
        0, this._character.hitPoints.current - damage
      ), this._character.hitPoints.max
    );
    this._dataService.setPartial({
      hitPoints: {
        max: this._character.hitPoints.max,
        temp: this._character.hitPoints.temp,
        current: hitPoints
      }
    });
  }

  public setCharacterLevel(lvl: number): void {
    if (lvl === this._character.level) { return; }

    this._dataService.setPartial({level: lvl});
    this._setCharacterXpFromLevel();
    this._adjustProficiencyBonus();
    this._adjustHitPoints();
  }

  /**
   * Determines the hit points a character receives on level up
   * according to the globally set levelUpStrategy and the supplied hit die
   */
  private _getLevelUpHitPoints(hitDie: Dice): number {
    switch (this._settingsService.levelUpStrategySetting) {
      case LevelUpStrategy.AVG:
        return DiceHelper.getAverageDieValue(hitDie);
      case LevelUpStrategy.MAX:
        return DiceHelper.getMaxDieValue(hitDie);
      default:
        throw new Error('Non-implemented levelup-strategy to determine hit points selected');
    }
  }

  /**
   * Calculate and set a characters xp to the minimum required xp for its current level
   * Only do so if the current xp is less than the required amount
   */
  private _setCharacterXpFromLevel(): void {
    const xp = Math.max(
      this._character.xp,
      CharacterClassLevelList.find(lv => lv.level === this._character.level).requiredXp
    );
    this._dataService.setPartial({xp: xp});
  }



  public setCurrentSpellSlots(level: number, remainingSlots: number): void {
    return this._spellService.setCurrentSpellSlots(level, remainingSlots);
  }

  public addHitDice(dice: number): void {
    const hitDice: number = Math.min(
      this._character.level,
      Math.max(this._character.hitDice + dice, 0)
    );
    this._dataService.setPartial({hitDice: hitDice});
  }

  /**
   * Wrapping methods of CharacterDataService
   */
  public setCharacterName(name: string): void {
    this._dataService.setPartial({name: name});
  }

  public setCharacterNotes(notes: Array<string>): void {
    this._dataService.setPartial({notes: notes});
  }

  public setPlayerName(name: string): void {
    this._dataService.setPartial({playerName: name});
  }

  public setPartialVitals(vitals: CharacterVitals): void {
    const characterVitals = this._character.vitals;

    Object.getOwnPropertyNames(vitals).forEach((prop) => {
      characterVitals[prop] = vitals[prop];
    });
    this._dataService.setPartial({vitals: characterVitals});
  }

  public setAlignment(alignment: Alignment): void {
    this._dataService.setPartial({alignment: alignment});
  }

  public setHistory(history: string): void {
    this._dataService.setPartial({history: history});
  }

  public setDeathSavingThrowState(savingThrows: DeathSavingThrowState): void {
    this._dataService.setPartial({deathSavingThrows: savingThrows});
  }

  /**
   * Exposing methods of CharacterProficiencyService
   */
  public addInstrumentProficiencies(profs: Array<string>): void {
    return this._proficiencyService.addInstrumentProficiencies(profs);
  }

  public addLanguages(languages: Array<Language>): void {
    return this._proficiencyService.addLanguages(languages);
  }

  public addSkills(skills: Array<SkillName>): void {
    return this._proficiencyService.addSkills(skills);
  }

  /**
   * Exposing methods of CharacterEquipmentService
   */
  public setEquipment(equipment: Equipment): void {
    return this._equipmentService.setEquipment(equipment);
  }

  public clearEquipment(): void {
    return this._equipmentService.clearEquipment();
  }

  public addEquipment(equipment: Array<string>): void {
    return this._equipmentService.addEquipment(equipment);
  }

  public setCurrency(currency: Currency): void {
    return this._equipmentService.setCurrency(currency);
  }

  public clearCurrency(): void {
    return this._equipmentService.clearCurrency();
  }

}
