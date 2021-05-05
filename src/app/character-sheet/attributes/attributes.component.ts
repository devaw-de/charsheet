import { Component, Input } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { CharacterService } from 'src/app/lib/character.service';
import { Utils } from 'src/app/lib/utils';
import { Attribute } from 'src/app/model/attributes';
import { CharacterAttributes, PlayerCharacterData } from '../../model/character';
import { PointBuyComponent } from './point-buy/point-buy.component';

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
    return Utils.getAbilityModifierAstring(attributeValue);
  }

  public startPointBuy() {
    const modal = this._dialog.open(PointBuyComponent, {
      data: {
        attr: this.attributes
    }});
    const modalSubscription = modal.afterClosed$.subscribe((attributes: CharacterAttributes) => {
      // this._service.setAttributes(attributes);
      if(attributes) {
        this._service.setAttributes(attributes);
      }
      modalSubscription.unsubscribe();
    });
  }

}
