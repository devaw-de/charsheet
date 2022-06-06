import {Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditNumberComponent} from 'src/app/components/modals/generic-modals/edit-number/edit-number.component';
import {EditStringComponent} from 'src/app/components/modals/generic-modals/edit-string/edit-string.component';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService,
    private _dialogService: DialogService
  ) {
    super(_characterService);
  }

  public editAge(): void {
    const config = {
      title: 'Age',
      currentValue: this._character.vitals.age
    };
    this._editNumberValue(config);
  }

  public editHeight(): void {
    const config = {
      title: 'Height',
      currentValue: this._character.vitals.height
    };
    this._editNumberValue(config);
  }

  public editWeight(): void {
    const config = {
      title: 'Weight',
      currentValue: this._character.vitals.weight
    };
    this._editNumberValue(config);
  }

  public editEyes(): void {
    const config = {
      title: 'Eyes',
      currentValue: this._character.vitals.eyes
    };
    this._editStringValue(config);
  }

  public editHair(): void {
    const config = {
      title: 'Hair',
      currentValue: this._character.vitals.hair
    };
    this._editStringValue(config);
  }

  public editSkin(): void {
    const config = {
      title: 'Skin',
      currentValue: this._character.vitals.skin
    };
    this._editStringValue(config);
  }

  private _editNumberValue(config: any): void {
    config.minValue = 1;
    config.maxValue = 999;

    const modal = this._dialogService.open(EditNumberComponent, {data: config});
    const modalSubscription = modal.afterClosed$.subscribe((value: number) => {
      if (value >= config.minValue && value <= config.maxValue) {
        switch (config.title) {
          case 'Age':
            this._characterService.setPartialVitals({age: value});
            break;
          case 'Height':
            this._characterService.setPartialVitals({height: value});
            break;
          case 'Weight':
            this._characterService.setPartialVitals({weight: value});
            break;
          default:
            break;
        }
      }
      modalSubscription.unsubscribe();
    });
  }

  private _editStringValue(config: any): void {
    config.minLenth = 1;
    config.maxLength = 50;

    const modal = this._dialogService.open(EditStringComponent, {data: config});
    const modalSubscription = modal.afterClosed$.subscribe((value: string) => {
      if (value?.length >= config.minLenth && value.length <= config.maxLength) {
        switch (config.title) {
          case 'Eyes':
            this._characterService.setPartialVitals({eyes: value});
            break;
          case 'Hair':
            this._characterService.setPartialVitals({hair: value});
            break;
          case 'Skin':
            this._characterService.setPartialVitals({skin: value});
            break;
          default:
            break;
        }
      }
      modalSubscription.unsubscribe();
    });
  }

}
