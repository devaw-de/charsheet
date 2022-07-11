import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Equipment} from '@app/models';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {RestComponent} from '../../../components/modals/rest/rest.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent extends CharacterSheetBaseComponent implements OnInit {

  public equipment: Equipment;

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.equipment = { ...this._character.equipment };
  }

  public equip(itemIndex: number): void {
    const item = this.equipment.backpack[itemIndex];
    this.equipment.equipped.push(item);
    this.equipment.backpack.splice(itemIndex, 1);
  }

  public unEquip(itemIndex: number): void {
    const item = this.equipment.equipped[itemIndex];
    this.equipment.backpack.push(item);
    this.equipment.equipped.splice(itemIndex, 1);
  }

  public openRestModal(): void {
    this._dialogService.open(RestComponent);
  }
}
