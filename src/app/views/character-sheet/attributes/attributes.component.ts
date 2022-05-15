import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Attribute, CharacterAttributes, PointBuyDTO} from '@app/models';
import {PointBuyComponent} from './point-buy/point-buy.component';
import {AbilityHelper, EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {

  @Input() attributes: CharacterAttributes;
  public attributesList: Array<Attribute> = [];

  constructor(
    private _service: CharacterService,
    private _dialog: DialogService
  ) {

    this.attributesList = EnumHelper.getAttributesList();
  }

  public getModifier(attributeValue: number): string {
    return AbilityHelper.getAbilityModifierAsString(attributeValue);
  }

  public startPointBuy(): void {
    const modal = this._dialog.open(PointBuyComponent, {
      data: {
        attr: this.attributes
    }});
    const modalSubscription = modal.afterClosed$.subscribe((result: PointBuyDTO) => {
      if (result) {
        this._service.setAttributes(result.attributes);
        this._service.setAppliedRacialBonuses(result.racialBonus);
      }
      modalSubscription.unsubscribe();
    });
  }

}
