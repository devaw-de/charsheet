import { Injectable } from "@angular/core";
import { DialogService } from "@ngneat/dialog";
import { LanguagePickerComponent } from "../builder/language-picker/language-picker.component";
import { Skill } from "../model/abilities";
import { CharacterBackground, CharacterBackgroundsList } from "../model/backgrounds";
import { Alignment, Dice, Language } from "../model/base";
import { CharacterAttributes, CharacterVitals, DefaultCharacter, Equipment, HitPoints, PlayerCharacterData } from "../model/character";
import { CharacterClass, CharacterClassesList, CharacterClassName } from "../model/characterClasses";
import { CharacterRace, CharacterSubRaceName } from "../model/characterRaces";
import { Currency, Tool } from "../model/equipment";
import { LevelUpStrategy } from "../model/settings";
import { CharacterClassLevelList, LevelLimits } from "../model/xp";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root',
 })
 export class CharacterService {

  private _character: PlayerCharacterData;
  private _levelUpStrategy: LevelUpStrategy = LevelUpStrategy.AVG;

  constructor(
    private _dialogService: DialogService
  ) {  }

  /**
   * Get the character
   */
  public getCharacter(): PlayerCharacterData {
    if(!this._character) this.createNewCharacter();

    return this._character;
  }

  public getLevelUpStrategy(): LevelUpStrategy {
    return this._levelUpStrategy;
  }

  /**
   * Get the chacater's class
   */
  public getClass(): CharacterClass {
    return CharacterClassesList.find(c => c.name === this._character.class)
  }

  /**
   * Create a new character with basic starting values
   */
  public createNewCharacter() {
    console.warn('Creating new Character');
    this._character = DefaultCharacter; //StartingPlayerCharacter;
  }

  /**
   * Override the level up strategy
   */
  public setLevelUpStrategy(strategy: LevelUpStrategy): void {
    this._levelUpStrategy = strategy;
  }

  /**
   * Override the character's alignment
   */
  public setAlignment(alignment: Alignment) {
    this._character.alignment = alignment;
  }

  /**
   * Override the character's background.
   * Handles the consequences from the background selection
   * according to the list of CharacterBackgroundDetails
   */
  public setBackground(background: CharacterBackground): void {
    this._removeBackground();

    this._character.background = background;
    const bg = CharacterBackgroundsList.find(b => b.name === background);

    if(bg.currency) {
      this.setCurrency(bg.currency);
    }
    if(bg.proficiencies?.length) {
      this.addSkills(bg.proficiencies)
    }
    if(bg.toolProficiencies?.length) {
      this.addToolProficiencies(bg.toolProficiencies);
    }
    if(bg.instrumentProficiencies?.length) {
      this.addInstrumentProficiencies(bg.instrumentProficiencies);
    }
    if(bg.equipment?.length) {
      this.addEquipment(bg.equipment);
    }
    if(bg.pickableLanguages) {
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

    if(!bg) return;

    // Skills
    if(this._character.proficiencies.skills?.length && bg.proficiencies?.length) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.filter(
        skill => !bg.proficiencies.some(
          bgSkill => bgSkill === skill
        )
      );
    }
    // Tools
    if(this._character.proficiencies.tools?.length && bg.toolProficiencies?.length) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.filter(
        tool => !bg.toolProficiencies.some(
          bgTool => bgTool === tool
        )
      );
    }
    // Instruments
    if(this._character.proficiencies.instruments?.length && bg.instrumentProficiencies?.length) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.filter(
        inst => !bg.instrumentProficiencies.some(
          bgInst => bgInst === inst
        )
      );
    }
    // Languages -> every race has at least 2 languages
    if(bg.pickableLanguages && this._character.proficiencies.languages.length > bg.pickableLanguages + 1) {
      for(let i=0; i<bg.pickableLanguages; i++) {
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
    this._character.class = c;
    this._adjustSavingThrows();
    this._adjustHitpoints();
    this._adjustArmorClass();
  }

  /**
   * Override the character's moneyz
   */
  public setCurrency(curreny: Currency): void {
    this._character.currency = curreny;
  }

  /**
   * Override the character's race
   */
  public setRace(r: CharacterRace): void {
    this._character.race = r;
    this._character.subrace = undefined;
  }

  /**
   * Override the character's subrace
   */
  public setSubrace(s: CharacterSubRaceName): void {
    this._character.subrace = s;
    this._adjustArmorClass();
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
    this._character.attributes = attributes
    this._adjustHitpoints();
    this._adjustArmorClass();
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
    const filteredLevelLimits = LevelLimits.filter(limit => limit <= this._character.xp);
    const maxPassedXpLimit: number = Math.max(...filteredLevelLimits);
    this._character.level = CharacterClassLevelList.find(lv => lv.requiredXp === maxPassedXpLimit).level;
    this._adjustProficiencyBonus();
    this._adjustHitpoints();
  }

  private _adjustProficiencyBonus(): void {
    this._character.proficiencies.proficiencyBonus = CharacterClassLevelList.find(lv => lv.level === this._character.level).profBonus;
  }

  private _adjustArmorClass() {
    const shieldBonus = this._character.shield ? 2 : 0;
    let nakedAc = 10 + Utils.getAbilityModifier(this._character.attributes.dex);

    switch(this._character.class) {
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
   * Adjust hitpoints after character levels has changed
   * TODO: Adjust for certain Feats like Toughness
   */
  private _adjustHitpoints(): void {
    const characterClass: CharacterClass = CharacterClassesList.find(cls => cls.name === this._character.class);
    const hitDie: Dice = characterClass.hitDie;
    const initialHitpointsValue: number = Utils.getMaxDieValue(hitDie);
    const hitpoints: HitPoints = {
        max: initialHitpointsValue,
        current: initialHitpointsValue,
        levelHistory: [initialHitpointsValue]
    };

    if(this._character.level > 1) {
      const hitpointsPerLevel = Utils.getAbilityModifier(this._character.attributes.con) + this._getLevelUpHitpoints(hitDie);

      for(let i=1; i<this._character.level; i++) {
        hitpoints.levelHistory.push(hitpointsPerLevel);
        hitpoints.max += hitpointsPerLevel;
      }
      hitpoints.current = hitpoints.max;
    }

    hitpoints.temp = 0;
    this._character.hitpoints = hitpoints;
  }

  public setCharacterLevel(lvl: number): void {
    if(lvl === this._character.level) return;

    this._character.level = lvl;
    this._setCharacterXpFromLevel();
    this._adjustProficiencyBonus();
    this._adjustHitpoints();
  }

  /**
   * Determines the hitpoints a character receives on level up
   * according to the globally set levelUpStrategy and the supplied hitdie
   */
  private _getLevelUpHitpoints(hitDie: Dice): number {
    switch(this._levelUpStrategy) {
      case LevelUpStrategy.AVG:
        return Utils.getAverageDieValue(hitDie);
      case LevelUpStrategy.MAX:
        return Utils.getMaxDieValue(hitDie);
      default:
        throw new Error('Non-implemented levelup-strategy to determine hitpoints selected');
    }
  }

  private _adjustSavingThrows(): void {
    console.warn('Adjusting Saving throws: NYI')
  }

  /**
   * Calculate and set a characters xp to the mininum required xp for its current level
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
    if(this._character.proficiencies.instruments) {
      this._character.proficiencies.instruments = this._character.proficiencies.instruments.concat(profs);
    } else this._character.proficiencies.instruments = profs;
  }

  /**
   * Add an array of languages to the known languages
   */
  public addLanguages(langs: Array<Language>): void {
    if(this._character.proficiencies.languages) {
      this._character.proficiencies.languages = this._character.proficiencies.languages.concat(langs);
    } else {
      this._character.proficiencies.languages = langs;
    }
  }

  /**
   * Set age, eyes, hair, skin, height, or weight
   */
  public setPartialVitals(vitals: CharacterVitals): void {
    Object.getOwnPropertyNames(vitals).forEach((prop) => {
      this._character.vitals[prop] = vitals[prop]
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
  public addSkills(skills: Array<Skill>): void {
    if(this._character.proficiencies.skills) {
      this._character.proficiencies.skills = this._character.proficiencies.skills.concat(skills);
    } else {
      this._character.proficiencies.skills = skills;
    }
  }

  /**
   * Add an array of tool proficiencies to the character
   */
  public addToolProficiencies(profs: Array<Tool>): void {
    if(this._character.proficiencies.tools) {
      this._character.proficiencies.tools = this._character.proficiencies.tools.concat(profs);
    } else {
      this._character.proficiencies.tools = profs;
    }
  }

  /**
   * Empty the character's moneyz
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