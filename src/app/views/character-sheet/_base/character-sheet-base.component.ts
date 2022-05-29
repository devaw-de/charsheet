import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {CharacterService} from '@app/services';
import {
  Alignment,
  CasterClasses,
  CharacterAttributes,
  CharacterBackground,
  CharacterClassName,
  CharacterRace,
  CharacterSubRaceName,
  CharacterVitals,
  Currency,
  PlayerCharacterData
} from '@app/models';
import {AbilityHelper} from '@app/helpers';

@Component({
  selector: 'app-character-base',
  template: ''
})
export class CharacterSheetBaseComponent implements OnDestroy {

  protected _characterSubscription: Subscription;
  protected _character: PlayerCharacterData;

  public get characterLoaded(): boolean {
    return !!this._character;
  }

  public get characterAc(): number {
    return this._character.ac;
  }

  public get characterAlignment(): Alignment {
    return this._character.alignment;
  }

  public get characterAttributes(): CharacterAttributes {
    return this._character.attributes;
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

  public get characterSubRace(): CharacterSubRaceName {
    return this._character.subRace;
  }

  public get spellAttackModifier(): string {
    return '+X';
  }

  public get spellDc(): number {
    let castingAbilityModifier: number;

    switch (this._character.className) {
      case CharacterClassName.BARD:
      case CharacterClassName.PALADIN:
      case CharacterClassName.SORCERER:
      case CharacterClassName.WARLOCK:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this._character.attributes.cha);
        break;
      case CharacterClassName.CLERIC:
      case CharacterClassName.DRUID:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this._character.attributes.wis);
        break;
      case CharacterClassName.WIZARD:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this._character.attributes.int);
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
    protected _characterService: CharacterService
  ) {
    this._characterSubscription = this._characterService.character$.subscribe(
      (c) => {
        this._character = c;
        console.log('char updated', c);
      }
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

}
