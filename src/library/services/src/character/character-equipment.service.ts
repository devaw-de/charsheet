import {Injectable} from '@angular/core';
import {Currency, Equipment, PlayerCharacterData} from '@app/models';
import {Subscription} from 'rxjs';
import {CharacterDataService} from './character-data.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterEquipmentService {

  private _character: PlayerCharacterData;
  private readonly _characterSubscription: Subscription;

  constructor(
    private _dataService: CharacterDataService
  ) {
    this._characterSubscription = this._dataService.character$.subscribe(
      char => this._character = char
    );
  }

  public setEquipment(equipment: Equipment): void {
    this._dataService.setPartial({equipment: equipment});
  }

  public clearEquipment(): void {
    this.setEquipment({});
  }

  public addEquipment(equipment: Array<string>): void {
    this._dataService.setPartial({
      equipment: {
        ...this._character.equipment,
        backpack: equipment.concat(this._character.equipment.backpack ?? [])
      }
    });
  }

  public setCurrency(currency: Currency): void {
    this._dataService.setPartial({currency: currency});
  }

  public clearCurrency(): void {
    this.setCurrency({});
  }

}
