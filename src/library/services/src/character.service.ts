import {Injectable} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {LanguagePickerComponent} from '../../../app/components/modals/language-picker/language-picker.component';
import {PointBuyComponent} from '../../../app/views/character-sheet/attributes/point-buy/point-buy.component';
import {
  Alignment,
  CharacterBackground,
  CharacterBackgroundsList,
  CharacterClassLevelList,
  CharacterAttributes,
  CharacterVitals,
  DefaultCharacter,
  Equipment,
  HitPoints,
  Currency,
  CharacterClass,
  CharacterClassesList,
  CharacterClassName,
  CharacterRace,
  CharacterRacesList,
  CharacterSubRaceName,
  CharacterSubRacesList,
  CharacterTraits,
  LevelLimits,
  LevelUpStrategy,
  Dice,
  Language,
  OptionalCharacterAttributes,
  PlayerCharacterData,
  PointBuyDTO,
  SkillName,
  Tool, LocalStorageKey, DeathSavingThrowState,
} from '@app/models';
import {SettingsService} from './settings.service';
import {AbilityHelper, ClassHelper, DiceHelper} from '@app/helpers';

@Injectable({
  providedIn: 'root',
 })
 export class CharacterService {

  private _character: PlayerCharacterData;

  constructor(
    private _dialogService: DialogService,
    private _settingsService: SettingsService
  ) {  }

  /**
   * Try and load a character from localStorage
   */
  public readCharacterFromStorage(): void {
    try {
      this._character = JSON.parse(localStorage.getItem(LocalStorageKey.CHARACTER));
    } catch (e) {
      console.warn(e);
    }
  }

  public saveCharacterToStorage(): void {
    localStorage.setItem(LocalStorageKey.CHARACTER, JSON.stringify(this._character));
  }

  public getCharacter(): PlayerCharacterData {
    if (!this._character) { this.createNewCharacter(); }

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

  public createNewCharacter(): void {
    console.warn('Creating new Character');
    this._character = DefaultCharacter;
  }

  public setAlignment(alignment: Alignment): void {
    this._character.alignment = alignment;
  }

  public setHistory(history: string): void {
    this._character.history = history;
  }

  public setDeathSavingThrowState(savingThrows: DeathSavingThrowState): void {
    this._character.deathSavingThrows = savingThrows;
  }

  /**
   * Override the character's background.
   * Handles the consequences of the background selection according to the list of CharacterBackgroundDetails
   */
  public setBackground(background: CharacterBackground): void {
    this._removeBackground();

    this._character.background = background;
    const bg = CharacterBackgroundsList.find(b => b.name === background);

    if (bg.currency) {
      this.setCurrency(bg.currency);
    }
    if (bg.proficiencies?.length) {
      this.addSkills(bg.proficiencies);
    }
    if (bg.toolProficiencies?.length) {
      this.addToolProficiencies(bg.toolProficiencies);
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
        result.forEach(lang => this._character.proficiencies.languages.push(lang));
        modalSubscription.unsubscribe();
      });
    }
  }

  /**
   * Remove all bonuses from a background
   */
  private _removeBackground(): void {
    const bg = CharacterBackgroundsList.find(b => b.name === this._character.background);

    if (!bg) { return; }

    if (this._character.proficiencies.skills?.length && bg.proficiencies?.length) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.filter(
        skill => !bg.proficiencies.some(
          bgSkill => bgSkill === skill
        )
      );
    }
    if (this._character.proficiencies.tools?.length && bg.toolProficiencies?.length) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.filter(
        tool => !bg.toolProficiencies.some(
          bgTool => bgTool === tool
        )
      );
    }
    if (this._character.proficiencies.instruments?.length && bg.instrumentProficiencies?.length) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.filter(
        inst => !bg.instrumentProficiencies.some(
          bgInst => bgInst === inst
        )
      );
    }
    if (bg.pickableLanguages && this._character.proficiencies.languages.length > bg.pickableLanguages + 1) {
      for (let i = 0; i < bg.pickableLanguages; i++) {
        this._character.proficiencies.languages.pop();
      }
    }

    // Equipment
    this._character.equipment = {
      equipped: [],
      backpack: []
    };
  }

  public setClass(className: CharacterClassName): void {
    this._character.className = className;
    this._adjustSavingThrows();
    this._adjustHitPoints();
    this._adjustArmorClass();
  }

  public setCurrency(currency: Currency): void {
    this._character.currency = currency;
  }

  public setRace(r: CharacterRace): void {
    this._character.race = r;
    this._character.subRace = undefined;
    if (ClassHelper.subRaceSelectionRequired(r)) { this._adjustAttributeBonuses(); }
  }

  public setSubRace(s: CharacterSubRaceName): void {
    this._character.subRace = s;
    this._adjustArmorClass();
    this._adjustAttributeBonuses();
  }

  public setCharacterName(name: string): void {
    this._character.name = name;
  }

  public setCharacterNotes(notes: Array<string>): void {
    this._character.notes = notes;
  }

  public setPlayerName(name: string): void {
    this._character.playerName = name;
  }

  public setAttributes(attributes: CharacterAttributes): void {
    if (attributes) {
      this._character.attributes = attributes;
      this._adjustHitPoints();
      this._adjustSavingThrows();
      this._adjustArmorClass();
    }
  }

  public setAppliedRacialBonuses(attributes: OptionalCharacterAttributes): void {
    if (attributes) {
      this._character.appliedRacialBonuses = attributes;
      this._adjustHitPoints();
      this._adjustSavingThrows();
      this._adjustArmorClass();
    }
  }

  public setEquipment(equipment: Equipment): void {
    this._character.equipment = equipment;
  }

  /**
   * Override the character's experience points
   * TODO: handle level up
   */
  public setXp(xp: number): void {
    this._character.xp = xp;
    this._setCharacterLevelByXp();
  }

  /**
   * Calculate and set a character's level from the character's current experience points
   */
  private _setCharacterLevelByXp(): void {
    this._character.level = LevelLimits.filter(limit => this._character.xp >= limit).length - 1;
    this._adjustProficiencyBonus();
    this._adjustHitPoints();
  }

  private _adjustProficiencyBonus(): void {
    this._character.proficiencies.proficiencyBonus = CharacterClassLevelList
      .find(lv => lv.level === this._character.level)
      .proficiencyBonus;
  }

  /**
   * Remove attribute bonuses from race selection and re-apply the bonuses of the currently selected race/subRace
   * Call this method when changing races / subRaces
   */
  private _adjustAttributeBonuses(): void {
    Object.keys(this._character.appliedRacialBonuses).forEach(key => {
      this._character.attributes[key] = this._character.attributes[key] - this._character.appliedRacialBonuses[key];
    });

    const racialBonus = ClassHelper.getRaceDetailsByName(this._character.race).attributeBonus;
    if (racialBonus.pickable) {
      // user interaction required
      const modal = this._dialogService.open(PointBuyComponent, {
        enableClose: false,
        closeButton: false,
        data: {
          character: this._character
        }
      });
      const modalSubscription = modal.afterClosed$.subscribe((result: PointBuyDTO) => {
        if (!result) {
          throw new Error('No result from Attribute Point Buy. Character corrupted.');
        } else {
          this.setAttributes(result.attributes);
          this._character.appliedRacialBonuses = result.racialBonus;
        }
        modalSubscription.unsubscribe();
      });
    } else {
      this._character.appliedRacialBonuses = racialBonus;
    }
  }

  private _adjustArmorClass(): void {
    const shieldBonus = this._character.shield ? 2 : 0;
    const nakedAc = 10 + AbilityHelper.getAbilityModifier(this._character.attributes.dex);

    switch (this._character.className) {
      case CharacterClassName.MONK:
        this._character.ac = nakedAc + AbilityHelper.getAbilityModifier(this._character.attributes.wis);
        break;
      case CharacterClassName.BARBARIAN:
        this._character.ac = nakedAc + shieldBonus + AbilityHelper.getAbilityModifier(this._character.attributes.con);
        break;
      default:
        this._character.ac = nakedAc + shieldBonus;
    }
  }

  /**
   * Adjust hit points after character levels has changed
   * TODO: Adjust for certain Feats like Toughness
   */
  private _adjustHitPoints(): void {
    const characterClass: CharacterClass = CharacterClassesList.find(cls => cls.name === this._character.className);
    const hitDie: Dice = characterClass.hitDie;
    const initialHitPointsValue: number = DiceHelper.getMaxDieValue(hitDie);
    const hitPoints: HitPoints = {
        max: initialHitPointsValue,
        current: initialHitPointsValue,
        levelHistory: [initialHitPointsValue]
    };

    if (this._character.level > 1) {
      const hitPointsPerLevel = AbilityHelper.getAbilityModifier(this._character.attributes.con) + this._getLevelUpHitPoints(hitDie);

      for (let i = 1; i < this._character.level; i++) {
        hitPoints.levelHistory.push(hitPointsPerLevel);
        hitPoints.max += hitPointsPerLevel;
      }
      hitPoints.current = hitPoints.max;
    }

    hitPoints.temp = 0;
    this._character.hitPoints = hitPoints;
  }

  public setCharacterLevel(lvl: number): void {
    if (lvl === this._character.level) { return; }

    this._character.level = lvl;
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

  private _adjustSavingThrows(): void {
    console.warn('Adjusting Saving throws: NYI');
  }

  /**
   * Calculate and set a characters xp to the minimum required xp for its current level
   * Only do so if the current xp is less than the required amount
   */
  private _setCharacterXpFromLevel(): void {
    this._character.xp = Math.max(
      this._character.xp,
      CharacterClassLevelList.find(lv => lv.level === this._character.level).requiredXp
    );
  }

  public addEquipment(equipment: Array<string>): void {
    this._character.equipment.backpack = this._character.equipment.backpack.concat(equipment);
  }

  public addInstrumentProficiencies(profs: Array<string>): void {
    if (this._character.proficiencies.instruments) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.concat(profs);
    } else { this._character.proficiencies.instruments = profs; }
  }

  public addLanguages(languages: Array<Language>): void {
    if (this._character.proficiencies.languages) {
      this._character.proficiencies.languages = this._character.proficiencies.languages.concat(languages);
    } else {
      this._character.proficiencies.languages = languages;
    }
  }

  public setPartialVitals(vitals: CharacterVitals): void {
    Object.getOwnPropertyNames(vitals).forEach((prop) => {
      this._character.vitals[prop] = vitals[prop];
    });
  }

  public addSkills(skills: Array<SkillName>): void {
    if (this._character.proficiencies.skills) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.concat(skills);
    } else {
      this._character.proficiencies.skills = skills;
    }
  }

  public addToolProficiencies(profs: Array<Tool>): void {
    if (this._character.proficiencies.tools) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.concat(profs);
    } else {
      this._character.proficiencies.tools = profs;
    }
  }

  public clearCurrency(): void {
    this._character.currency = {};
  }

  public clearEquipment(): void {
    this._character.equipment = {
      backpack: [],
      equipped: [],
    };
  }

 }
