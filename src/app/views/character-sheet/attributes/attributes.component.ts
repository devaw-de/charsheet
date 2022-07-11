import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Attribute} from '@app/models';
import {PointBuyComponent} from './point-buy/point-buy.component';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent extends CharacterSheetBaseComponent {

  public attributesList: Array<Attribute> = EnumHelper.getAttributesList();

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public getModifier(attributeValue: number): string {
    return AbilityHelper.getAbilityModifierAsString(attributeValue);
  }

  public startPointBuy(): void {
    const modal = this._dialogService.open(PointBuyComponent);
  }

}
