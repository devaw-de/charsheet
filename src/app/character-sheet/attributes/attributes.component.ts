import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from 'src/app/lib/character.service';
import {Utils} from 'src/app/lib/utils';
import {Attribute} from 'src/app/model/attributes';
import {CharacterAttributes, PointBuyDTO} from '../../model/character';
import {PointBuyComponent} from './point-buy/point-buy.component';

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

    this.attributesList = Utils.getAttributesList();
  }

  public getModifier(attributeValue: number): string {
    return Utils.getAbilityModifierAsString(attributeValue);
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
