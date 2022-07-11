import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CharacterService} from '@app/services';
import {
  Alignment,
  CasterClasses,
  CharacterAttributes,
  CharacterBackground, CharacterClass,
  CharacterClassName,
  CharacterRace,
  CharacterRaceDetails,
  CharacterSubRaceDetails,
  CharacterSubRaceName,
  CharacterVitals,
  Currency,
  PlayerCharacterData
} from '@app/models';
import {AbilityHelper, ClassHelper} from '@app/helpers';

@Component({
  selector: 'app-character-base',
  template: ''
})
export class CharacterSheetBaseComponent implements OnInit, OnDestroy {

  protected _characterSubscription: Subscription;
  protected _character: PlayerCharacterData;

  public get characterLoaded(): boolean {
    return !!this._character.className;
  }

  public get characterAc(): number {
    return this._character.ac;
  }

  public get characterAlignment(): Alignment {
    return this._character.alignment;
  }

  public get characterAttributes(): CharacterAttributes {
    return AbilityHelper.getAttributesTotal(this._character);
  }

  public get characterBaseAttributes(): CharacterAttributes {
    return this._character.baseAttributes;
  }

  public get characterBackground(): CharacterBackground {
    return this._character.background;
  }

  public get characterCurrency(): Currency {
    return this._character.currency;
  }

  public get characterClass(): string {
    return this._character.className.toString().toLowerCase();
  }

  public get characterClassDetails(): CharacterClass {
    return ClassHelper.getClassDetailsByName(this.characterClassName);
  }

  public get hitDice(): number {
    return this._character.hitDice;
  }

  public get characterClassName(): CharacterClassName {
    return this._character.className;
  }

  public get characterHistory(): string {
    return this._character.history ?? '';
  }

  public get isCaster(): boolean {
    return CasterClasses.includes(this._character.className);
  }

  public get characterLevel(): number {
    return this._character.level;
  }

  public get characterName(): string {
    return this._character.name;
  }

  public get characterNotes(): Array<string> {
    return this._character.notes;
  }

  public get playerName(): string {
    return this._character.playerName;
  }

  public get characterRace(): CharacterRace {
    return this._character.race;
  }

  public get characterRaceDetails(): CharacterRaceDetails {
    return ClassHelper.getRaceDetailsByName(this.characterRace);
  }

  public get characterSubRace(): CharacterSubRaceName {
    return this._character.subRace;
  }

  public get characterSubRaceDetails(): CharacterSubRaceDetails {
    return ClassHelper.getSubRaceDetailsByName(this.characterSubRace);
  }

  public get spellAttackModifier(): string {
    console.log('spellAttackModifier NYI');
    return '+X';
  }

  public get spellDc(): number {
    const attributes = AbilityHelper.getAttributesTotal(this._character);
    let castingAbilityModifier: number;

    switch (this._character.className) {
      case CharacterClassName.BARD:
      case CharacterClassName.PALADIN:
      case CharacterClassName.SORCERER:
      case CharacterClassName.WARLOCK:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(attributes.cha);
        break;
      case CharacterClassName.CLERIC:
      case CharacterClassName.DRUID:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(attributes.wis);
        break;
      case CharacterClassName.WIZARD:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(attributes.int);
        break;
      default:
        return 0;
    }

    return 8 + this._character.proficiencies.proficiencyBonus + castingAbilityModifier;
  }

  public get characterSpellSlots(): Map<number, number> {
    return this._character.spellSlots;
  }

  public get characterVitals(): CharacterVitals {
    return this._character.vitals;
  }

  public get characterXp(): number {
    return this._character.xp;
  }

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this._characterSubscription = this._characterService.character$.subscribe((c) => {
        this._character = c;
        this._changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

}
