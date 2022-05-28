import {Component, OnDestroy} from '@angular/core';
import {CharacterService} from '@app/services';
import {Subscription} from 'rxjs';
import {
  Alignment, CharacterAttributes,
  CharacterBackground,
  CharacterClassName,
  CharacterRace,
  CharacterSubRaceName,
  CharacterVitals,
  Currency,
  PlayerCharacterData
} from '@app/models';

@Component({
  selector: 'app-character-base',
  template: ''
})
export class CharacterSheetBaseComponent implements OnDestroy {

  protected _characterSubscription: Subscription;
  protected _character: PlayerCharacterData;

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

  public get characterClassName(): CharacterClassName {
    return this._character.className;
  }

  public get characterHistory(): string {
    return this._character.history ?? '';
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
      (c) => this._character = c
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

}
