import {Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Attribute, PointBuyDTO} from '@app/models';
import {PointBuyComponent} from './point-buy/point-buy.component';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent extends CharacterSheetBaseComponent {

  public attributesList: Array<Attribute> = [];

  constructor(
    protected _characterService: CharacterService,
    private _dialogService: DialogService
  ) {
    super(_characterService);
    this.attributesList = EnumHelper.getAttributesList();
  }

  public getModifier(attributeValue: number): string {
    return AbilityHelper.getAbilityModifierAsString(attributeValue);
  }

  public startPointBuy(): void {
    const modal = this._dialogService.open(PointBuyComponent, {
      data: {
        character: this._character
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((result: PointBuyDTO) => {
      if (result) {
        this._characterService.setAttributes(result.attributes);
        this._characterService.setAppliedRacialBonuses(result.racialBonus);
      }
      modalSubscription.unsubscribe();
    });
  }

}
