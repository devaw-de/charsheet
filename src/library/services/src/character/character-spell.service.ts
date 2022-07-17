import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {CharacterDataService} from './character-data.service';
import {
  BardSpellSlotsMap,
  CharacterClassName,
  ClericSpellSlotsMap,
  DruidSpellSlotsMap,
  PaladinSpellSlotsMap,
  PlayerCharacterData,
  RangerSpellSlotsMap,
  SorcererSpellSlotsMap,
  WizardSpellSlotsMap
} from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class CharacterSpellService {

  private _character: PlayerCharacterData;
  private readonly _characterSubscription: Subscription;

  constructor(
    private _dataService: CharacterDataService
  ) {
    this._characterSubscription = this._dataService.character$.subscribe(
      char => this._character = char
    );
  }

  public getSpellSlots(className: CharacterClassName): Map<number, number> {
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

    return slots.get(this._character.level);
  }

  public setCurrentSpellSlots(level: number, remainingSlots: number): void {
    const spellSlots = new Map(this._character.spellSlots);
    spellSlots.set(level, remainingSlots);

    this._dataService.setPartial({spellSlots: spellSlots});
  }

}
