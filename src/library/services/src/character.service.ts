import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DialogService} from '@ngneat/dialog';
import {
  Alignment,
  BardSpellSlotsMap,
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
  ClericSpellSlotsMap,
  Currency,
  DeathSavingThrowState,
  DefaultCharacter,
  Dice,
  DruidSpellSlotsMap,
  Equipment,
  HitPoints,
  Language,
  LevelLimits,
  LevelUpStrategy,
  LocalStorageKey,
  OptionalCharacterAttributes,
  PaladinSpellSlotsMap,
  PlayerCharacterData,
  PointBuyDTO,
  RangerSpellSlotsMap,
  SkillName,
  SorcererSpellSlotsMap,
  Tool,
  WizardSpellSlotsMap,
} from '@app/models';
import {SettingsService} from './settings.service';
import {AbilityHelper, ClassHelper, DiceHelper, EnumHelper, JsonHelper} from '@app/helpers';
import {LanguagePickerComponent} from '../../../app/components/modals/language-picker/language-picker.component';
import {PointBuyComponent} from '../../../app/views/character-sheet/attributes/point-buy/point-buy.component';

@Injectable({
  providedIn: 'root',
 })
 export class CharacterService {

  private _character = new BehaviorSubject<PlayerCharacterData>(null);
  public character$ = this._character.asObservable();

  constructor(
    private _dialogService: DialogService,
    private _settingsService: SettingsService
  ) {
    this._readCharacterFromStorage();
  }

  private _readCharacterFromStorage(): void {
    try {
      const character = JsonHelper.parseCharacter(localStorage.getItem(LocalStorageKey.CHARACTER));
      if (!character) {
        console.log('using Default character');
        this._character.next(DefaultCharacter);
        return;
      }
      console.log('character restored from storage', character);
      this._character.next(character);
    } catch (e) {
      console.warn(e);
      this._character.next(DefaultCharacter);
    }
  }

  public saveCharacterToStorage(): void {
    localStorage.setItem(
      LocalStorageKey.CHARACTER,
      JsonHelper.stringifyCharacter(this._character.value)
    );
  }

  public getCharacter(): PlayerCharacterData {
    if (!this._character.value) { this.createNewCharacter(); }

    return this._character.value;
  }

  public getClass(): CharacterClass {
    return CharacterClassesList.find(c => c.name === this._character.value.className);
  }

  /**
   * Get the feats for a character from his class, race, and subRace
   */
  public getCharacterFeats(): Array<CharacterTraits> {
    const feats: Array<CharacterTraits> = [];
    const charClass = CharacterClassesList.find(c => c.name === this._character.value.className);
    const race = CharacterRacesList.find(r => r.name === this._character.value.race);
    const subRace = CharacterSubRacesList.find(s => s.name === this._character.value.subRace);
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
    this._character.next(DefaultCharacter);
  }

  public setAlignment(alignment: Alignment): void {
    this._character.next({
      ...this._character.value,
      alignment: alignment
    });
  }

  public setHistory(history: string): void {
    this._character.next({
      ...this._character.value,
      history: history
    });
  }

  public setDeathSavingThrowState(savingThrows: DeathSavingThrowState): void {
    this._character.next({
      ...this._character.value,
      deathSavingThrows: savingThrows
    });
  }

  /**
   * Override the character's background.
   * Handles the consequences of the background selection according to the list of CharacterBackgroundDetails
   */
  public setBackground(background: CharacterBackground): void {
    this._removeBackground();

    this._character.next({
      ...this._character.value,
      background: background
    });
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
          currentLanguages: this._character.value.proficiencies.languages,
          maxLanguages: bg.pickableLanguages
        }
      });
      const modalSubscription = modal.afterClosed$.subscribe((result: Array<Language>) => {
        this._character.next({
          ...this._character.value,
          proficiencies: {
            ...this._character.value.proficiencies,
            languages: result
          }
        });
        modalSubscription.unsubscribe();
      });
    }
  }

  /**
   * Remove all bonuses from a background
   */
  private _removeBackground(): void {
    const bg = CharacterBackgroundsList.find(b => b.name === this._character.value.background);

    if (!bg) { return; }

    let skills = { ...this._character.value.proficiencies.skills };
    let toolProficiencies = { ...this._character.value.proficiencies.tools };
    let instrumentProficiencies = { ... this._character.value.proficiencies.instruments };
    const languageProficiencies = { ... this._character.value.proficiencies.languages };

    if (this._character.value.proficiencies.skills?.length && bg.proficiencies?.length) {
      skills = this._character.value.proficiencies.skills.filter(
        skill => !bg.proficiencies.some(
          bgSkill => bgSkill === skill
        )
      );
    }
    if (this._character.value.proficiencies.tools?.length && bg.toolProficiencies?.length) {
      toolProficiencies = this._character.value.proficiencies.tools.filter(
        tool => !bg.toolProficiencies.some(
          bgTool => bgTool === tool
        )
      );
    }
    if (this._character.value.proficiencies.instruments?.length && bg.instrumentProficiencies?.length) {
      instrumentProficiencies = this._character.value.proficiencies.instruments.filter(
        inst => !bg.instrumentProficiencies.some(
          bgInst => bgInst === inst
        )
      );
    }
    if (bg.pickableLanguages && this._character.value.proficiencies.languages.length > bg.pickableLanguages + 1) {
      for (let i = 0; i < bg.pickableLanguages; i++) {
        languageProficiencies.pop();
      }
    }

    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
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
    this._character.next({
      ...this._character.value,
      className: className,
      spellSlots: this._getSpellSlots(className)
    });
    this._adjustSavingThrows();
    this._adjustHitPoints();
    this._adjustArmorClass();
  }

  private _getSpellSlots(className: CharacterClassName): Map<number, number> {
    let slots: Map<number, Map<number, number>>;

    switch (className) {
      case CharacterClassName.BARD:
        slots = new Map(BardSpellSlotsMap);
        break;
      case CharacterClassName.CLERIC:
        slots = new Map(ClericSpellSlotsMap);
        break;
      case CharacterClassName.DRUID:
        slots = new Map(DruidSpellSlotsMap);
        break;
      case CharacterClassName.PALADIN:
        slots = new Map(PaladinSpellSlotsMap);
        break;
      case CharacterClassName.RANGER:
        slots = new Map(RangerSpellSlotsMap);
        break;
      case CharacterClassName.SORCERER:
        slots = new Map(SorcererSpellSlotsMap);
        break;
      case CharacterClassName.WIZARD:
        slots = new Map(WizardSpellSlotsMap);
        break;
      default:
        return null;
    }

    return slots.get(this._character.value.level);
  }

  public setCurrency(currency: Currency): void {
    this._character.next({
      ...this._character.value,
      currency: currency
    });
  }

  public clearCurrency(): void {
    this.setCurrency({});
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
    this._character.next({
      ...this._character.value,
      race: race,
      subRace: undefined,
      appliedRacialBonuses: this._getRacialBonuses(race)
    });
    if (ClassHelper.subRaceSelectionRequired(r)) {
      this._adjustAttributeBonuses();
    }
  }

  public setSubRace(subRace: CharacterSubRaceName): void {
    this._character.next({
      ...this._character.value,
      subRace: subRace,
      appliedRacialBonuses: this._getSubRaceRacialBonuses(subRace, {...this._character.value.appliedRacialBonuses})
    });
    this._adjustArmorClass();
    this._adjustAttributeBonuses();
  }

  public setCharacterName(name: string): void {
    this._character.next({
      ...this._character.value,
      name: name
    });
  }

  public setCharacterNotes(notes: Array<string>): void {
    this._character.next({
      ...this._character.value,
      notes: notes
    });
  }

  public setPlayerName(name: string): void {
    this._character.next({
      ...this._character.value,
      playerName: name
    });
  }

  public setAttributes(attributes: CharacterAttributes): void {
    if (attributes) {
      this._character.next({
        ...this._character.value,
        attributes: attributes
      });
      this._adjustHitPoints();
      this._adjustSavingThrows();
      this._adjustArmorClass();
    }
  }

  public setAppliedRacialBonuses(attributes: OptionalCharacterAttributes): void {
    if (attributes) {
      this._character.next({
        ...this._character.value,
        appliedRacialBonuses: attributes
      });
      this._adjustHitPoints();
      this._adjustSavingThrows();
      this._adjustArmorClass();
    }
  }

  public setEquipment(equipment: Equipment): void {
    this._character.next({
      ...this._character.value,
      equipment: equipment
    });
  }

  public clearEquipment(): void {
   this.setEquipment({});
  }

  /**
   * Override the character's experience points
   * TODO: handle level up
   */
  public setXp(xp: number): void {
    console.log('setting xp');
    this._character.next({
      ...this._character.value,
      xp: xp
    });
    this._setCharacterLevelByXp();
  }

  /**
   * Calculate and set a character's level from the character's current experience points
   */
  private _setCharacterLevelByXp(): void {
    const previousLevel = this._character.value.level;
    const nextLevel = LevelLimits.filter(limit => this._character.value.xp >= limit).length - 1;
    this._character.next({
      ...this._character.value,
      level: nextLevel
    });
    this._adjustProficiencyBonus();
    this._adjustHitPoints();
    this._adjustHitDice(nextLevel - previousLevel);
  }

  private _adjustHitDice(levelDifference: number): void {
    const calculatedHitDice = Math.max(0, this._character.value.hitDice + levelDifference);
    this._character.next({
      ...this._character.value,
      hitDice: calculatedHitDice
    });
  }

  private _adjustProficiencyBonus(): void {
    const bonus = CharacterClassLevelList.find(lv => lv.level === this._character.value.level).proficiencyBonus;

    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
        proficiencyBonus: bonus ?? 1
      }
    });
  }

  /**
   * Remove attribute bonuses from race selection and re-apply the bonuses of the currently selected race/subRace
   * Call this method when changing races / subRaces
   */
  private _adjustAttributeBonuses(): void {
    const attributes = { ...this._character.value.attributes };
    const racialBonuses = { ...this._character.value.appliedRacialBonuses };
    Object.keys(racialBonuses).forEach(key => {
      attributes[key] = attributes[key] - racialBonuses[key];
    });
    this._character.next({
      ...this._character.value,
      attributes: attributes
    });

    const racialBonus = ClassHelper.getRaceDetailsByName(this._character.value.race).attributeBonus;
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
          this._character.next({
            ...this._character.value,
            appliedRacialBonuses: result.racialBonus
          });
        }
        modalSubscription.unsubscribe();
      });
    } else {
      this._character.next({
        ...this._character.value,
        appliedRacialBonuses: racialBonus
      });
    }
  }

  private _adjustArmorClass(): void {
    const shieldBonus = this._character.value.shield ? 2 : 0;
    const nakedAc = 10 + AbilityHelper.getAbilityModifier(this._character.value.attributes.dex);
    let ac: number;

    switch (this._character.value.className) {
      case CharacterClassName.MONK:
        ac = nakedAc + AbilityHelper.getAbilityModifier(this._character.value.attributes.wis);
        break;
      case CharacterClassName.BARBARIAN:
        ac = nakedAc + shieldBonus + AbilityHelper.getAbilityModifier(this._character.value.attributes.con);
        break;
      default:
        ac = nakedAc + shieldBonus;
    }

    this._character.next({
      ...this._character.value,
      ac: ac
    });
  }

  /**
   * Adjust hit points after character levels has changed
   * TODO: Adjust for certain Feats like Toughness
   */
  private _adjustHitPoints(): void {
    const characterClass: CharacterClass = CharacterClassesList.find(cls => cls.name === this._character.value.className);
    const initialHitPointsValue: number = DiceHelper.getMaxDieValue(characterClass.hitDie);
    const hitPoints: HitPoints = {
        max: initialHitPointsValue,
        current: initialHitPointsValue,
        levelHistory: [initialHitPointsValue]
    };

    if (this._character.value.level > 1) {
      const hitPointsPerLevel =
        AbilityHelper.getAbilityModifier(this._character.value.attributes.con)
        + this._getLevelUpHitPoints(characterClass.hitDie);

      for (let i = 1; i < this._character.value.level; i++) {
        hitPoints.levelHistory.push(hitPointsPerLevel);
        hitPoints.max += hitPointsPerLevel;
      }
      hitPoints.current = hitPoints.max;
    }
    hitPoints.temp = 0;

    this._character.next({
      ...this._character.value,
      hitPoints: hitPoints
    });
  }

  public takeDamage(damage: number): void {
    const hitPoints = Math.min(
      Math.max(
        0, this._character.value.hitPoints.current - damage
      ), this._character.value.hitPoints.max
    );
    this._character.next({
      ...this._character.value,
      hitPoints: {
        max: this._character.value.hitPoints.max,
        temp: this._character.value.hitPoints.temp,
        current: hitPoints
      }
    });
  }

  public setCharacterLevel(lvl: number): void {
    if (lvl === this._character.value.level) { return; }

    this._character.next({
      ...this._character.value,
      level: lvl
    });
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
    console.warn('Adjusting Saving throws: NYI', this._character.value.className);
  }

  /**
   * Calculate and set a characters xp to the minimum required xp for its current level
   * Only do so if the current xp is less than the required amount
   */
  private _setCharacterXpFromLevel(): void {
    const xp = Math.max(
      this._character.value.xp,
      CharacterClassLevelList.find(lv => lv.level === this._character.value.level).requiredXp
    );
    this._character.next({
      ...this._character.value,
      xp: xp
    });
  }

  public addEquipment(equipment: Array<string>): void {
    this._character.next({
      ...this._character.value,
      equipment: {
        ...this._character.value.equipment,
        backpack: this._character.value.equipment.backpack.concat(equipment)
      }
    });
  }

  public addInstrumentProficiencies(profs: Array<string>): void {
    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
        instruments: profs.concat(this._character.value.proficiencies.instruments ?? [])
      }
    });
  }

  public addLanguages(languages: Array<Language>): void {
    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
        languages: languages.concat(this._character.value.proficiencies.languages ?? [])
      }
    });
  }

  public addSkills(skills: Array<SkillName>): void {
    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
        skills: skills.concat(this._character.value.proficiencies.skills ?? [])
      }
    });
  }

  public addToolProficiencies(profs: Array<Tool>): void {
    this._character.next({
      ...this._character.value,
      proficiencies: {
        ...this._character.value.proficiencies,
        tools: profs.concat(this._character.value.proficiencies.tools ?? [])
      }
    });
  }

  public setPartialVitals(vitals: CharacterVitals): void {
    const characterVitals = this._character.value.vitals;

    Object.getOwnPropertyNames(vitals).forEach((prop) => {
      characterVitals[prop] = vitals[prop];
    });
    this._character.next({
      ...this._character.value,
      vitals: characterVitals
    });
  }

  public setCurrentSpellSlots(level, remainingSlots): void {
    const spellSlots = new Map(this._character.value.spellSlots);
    spellSlots.set(level, remainingSlots);

    this._character.next({
      ...this._character.value,
      spellSlots: spellSlots
    });
  }

  public addHitDice(dice: number): void {
    const hitDice: number = Math.min(
      this._character.value.level,
      Math.max(this._character.value.hitDice + dice, 0)
    );
    this._character.next({
      ...this._character.value,
      hitDice: hitDice
    });
  }

}
