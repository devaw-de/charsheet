import {Component} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {Equipment} from '@app/models';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent extends CharacterSheetBaseComponent {

  public equipment: Equipment;

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
    this.equipment = { ...this._character.equipment };
  }

  private saveEquipment(): void {
    this._characterService.setEquipment(this.equipment);
  }

  public equip(itemIndex: number): void {
    const item = this.equipment.backpack[itemIndex];
    this.equipment.equipped.push(item);
    this.equipment.backpack.splice(itemIndex, 1);
  }

  public unequip(itemIndex: number): void {
    const item = this.equipment.equipped[itemIndex];
    this.equipment.backpack.push(item);
    this.equipment.equipped.splice(itemIndex, 1);
  }

}
