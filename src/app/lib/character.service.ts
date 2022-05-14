import {Injectable} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {LanguagePickerComponent} from '../builder/language-picker/language-picker.component';
import {PointBuyComponent} from '../character-sheet/attributes/point-buy/point-buy.component';
import {SkillName} from '../model/abilities';
import {CharacterBackground, CharacterBackgroundsList} from '../model/backgrounds';
import {
  CharacterAttributes,
  CharacterVitals,
  DefaultCharacter,
  Equipment,
  HitPoints,
  OptionalCharacterAttributes,
  PlayerCharacterData,
  PointBuyDTO
} from '../model/character';
import {CharacterClass, CharacterClassesList, CharacterClassName} from '../model/characterClasses';
import {CharacterRace, CharacterRacesList, CharacterSubRaceName, CharacterSubRacesList} from '../model/characterRaces';
import {Currency, Tool} from '../model/equipment';
import {LevelUpStrategy} from '../model/settings';
import {CharacterTraits} from '../model/traits';
import {CharacterClassLevelList, LevelLimits} from '../model/xp';
import {Utils} from './utils';
import {Language} from '../model/language';
import {Dice} from '../model/dice';
import {Alignment} from '../model/alignments';
import {SettingsService} from './settings.service';

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
  public loadCharacter(): void {
    try {
      this._character = JSON.parse(localStorage.getItem('character'));
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Get the character
   */
  public getCharacter(): PlayerCharacterData {
    if (!this._character) { this.createNewCharacter(); }

    return this._character;
  }

  /**
   * Get the character's class
   */
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
    charClass.feats.forEach(ft => {
      feats.push(ft);
    });
    race.feats.forEach(ft => {
      feats.push(ft);
    });
    subRace.feats.forEach(ft => {
      feats.push(ft);
    });
    return feats;
  }

  /**
   * Create a new character with basic starting values
   */
  public createNewCharacter(): void {
    console.warn('Creating new Character');
    this._character = DefaultCharacter; // StartingPlayerCharacter;
  }

  /**
   * Override the character's alignment
   */
  public setAlignment(alignment: Alignment): void {
    this._character.alignment = alignment;
  }

  /**
   * Override the character's background story
   */
  public setHistory(history: string): void {
    this._character.history = history;
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
      });
    }
  }

  /**
   * Remove all bonuses from a background
   */
  private _removeBackground(): void {
    const bg = CharacterBackgroundsList.find(b => b.name === this._character.background);

    if (!bg) { return; }

    // Skills
    if (this._character.proficiencies.skills?.length && bg.proficiencies?.length) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.filter(
        skill => !bg.proficiencies.some(
          bgSkill => bgSkill === skill
        )
      );
    }
    // Tools
    if (this._character.proficiencies.tools?.length && bg.toolProficiencies?.length) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.filter(
        tool => !bg.toolProficiencies.some(
          bgTool => bgTool === tool
        )
      );
    }
    // Instruments
    if (this._character.proficiencies.instruments?.length && bg.instrumentProficiencies?.length) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.filter(
        inst => !bg.instrumentProficiencies.some(
          bgInst => bgInst === inst
        )
      );
    }
    // Languages -> every race has at least 2 languages
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

  /**
   * Override the character's class
   */
  public setClass(c: CharacterClassName): void {
    this._character.className = c;
    this._adjustSavingThrows();
    this._adjustHitPoints();
    this._adjustArmorClass();
  }

  /**
   * Override the character's money
   */
  public setCurrency(currency: Currency): void {
    this._character.currency = currency;
  }

  /**
   * Override the character's race
   */
  public setRace(r: CharacterRace): void {
    this._character.race = r;
    this._character.subRace = undefined;
    if (Utils.subRaceSelectionRequired(r)) { this._adjustAttributeBonuses(); }
  }

  /**
   * Override the character's subRace
   */
  public setSubRace(s: CharacterSubRaceName): void {
    this._character.subRace = s;
    this._adjustArmorClass();
    this._adjustAttributeBonuses();
  }

  /**
   * Override the character's name
   */
  public setCharacterName(name: string): void {
    this._character.name = name;
  }

  public setCharacterNotes(notes: Array<string>): void {
    this._character.notes = notes;
  }

  /**
   * Override the player-name
   */
  public setPlayerName(name: string): void {
    this._character.playerName = name;
  }

  /**
   * Override the character's attribute scores
   */
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

  /**
   * Override the character's equipment
   */
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

    const racialBonus = Utils.getRaceDetailsByName(this._character.race).attributeBonus;
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
    const nakedAc = 10 + Utils.getAbilityModifier(this._character.attributes.dex);

    switch (this._character.className) {
      case CharacterClassName.MONK:
        this._character.ac = nakedAc + Utils.getAbilityModifier(this._character.attributes.wis);
        break;
      case CharacterClassName.BARBARIAN:
        this._character.ac = nakedAc + shieldBonus + Utils.getAbilityModifier(this._character.attributes.con);
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
    const initialHitPointsValue: number = Utils.getMaxDieValue(hitDie);
    const hitPoints: HitPoints = {
        max: initialHitPointsValue,
        current: initialHitPointsValue,
        levelHistory: [initialHitPointsValue]
    };

    if (this._character.level > 1) {
      const hitPointsPerLevel = Utils.getAbilityModifier(this._character.attributes.con) + this._getLevelUpHitPoints(hitDie);

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
        return Utils.getAverageDieValue(hitDie);
      case LevelUpStrategy.MAX:
        return Utils.getMaxDieValue(hitDie);
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

  /**
   * Add an array of items to the character's backpack
   */
  public addEquipment(equipment: Array<string>): void {
    this._character.equipment.backpack = this._character.equipment.backpack.concat(equipment);
  }

  /**
   * Add an array of instrument proficiencies to the character
   */
  public addInstrumentProficiencies(profs: Array<string>): void {
    if (this._character.proficiencies.instruments) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.concat(profs);
    } else { this._character.proficiencies.instruments = profs; }
  }

  /**
   * Add an array of languages to the known languages
   */
  public addLanguages(languages: Array<Language>): void {
    if (this._character.proficiencies.languages) {
      this._character.proficiencies.languages = this._character.proficiencies.languages.concat(languages);
    } else {
      this._character.proficiencies.languages = languages;
    }
  }

  /**
   * Set age, eyes, hair, skin, height, or weight
   */
  public setPartialVitals(vitals: CharacterVitals): void {
    Object.getOwnPropertyNames(vitals).forEach((prop) => {
      this._character.vitals[prop] = vitals[prop];
    });
  }

  /**
   * Override age, eyes, hair, skin, height, and weight
   */
  public setVitals(vitals: CharacterVitals): void {
    this._character.vitals = vitals;
  }

  /**
   * Add an array of Skills to the character
   */
  public addSkills(skills: Array<SkillName>): void {
    if (this._character.proficiencies.skills) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.concat(skills);
    } else {
      this._character.proficiencies.skills = skills;
    }
  }

  /**
   * Add an array of tool proficiencies to the character
   */
  public addToolProficiencies(profs: Array<Tool>): void {
    if (this._character.proficiencies.tools) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.concat(profs);
    } else {
      this._character.proficiencies.tools = profs;
    }
  }

  /**
   * Empty the character's money
   */
  public clearCurrency(): void {
    this._character.currency = {};
  }

  /**
   * Empty the character's equipment list
   */
  public clearEquipment(): void {
    this._character.equipment = {
      backpack: [],
      equipped: [],
    };
  }
 }
