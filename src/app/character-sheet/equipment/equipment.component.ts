import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/lib/character.service';
import { Equipment } from 'src/app/model/character';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {

  @Input() equipment: Equipment;

  constructor(
    private _service: CharacterService
  ) {}

  private saveEquipment() {
    this._service.setEquipment(this.equipment);
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
