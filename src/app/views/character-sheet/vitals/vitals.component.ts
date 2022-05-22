import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditNumberComponent} from 'src/app/components/modals/generic-modals/edit-number/edit-number.component';
import {EditStringComponent} from 'src/app/components/modals/generic-modals/edit-string/edit-string.component';
import {CharacterService} from '@app/services';
import {CharacterVitals} from '@app/models';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent {

  @Input() vitals: CharacterVitals;

  constructor(
    private _service: CharacterService,
    private _dialogService: DialogService
  ) { }

  public editAge(): void {
    const config = {
      title: 'Age',
      currentValue: this.vitals.age
    };
    this._editNumberValue(config);
  }

  public editHeight(): void {
    const config = {
      title: 'Height',
      currentValue: this.vitals.height
    };
    this._editNumberValue(config);
  }

  public editWeight(): void {
    const config = {
      title: 'Weight',
      currentValue: this.vitals.weight
    };
    this._editNumberValue(config);
  }

  public editEyes(): void {
    const config = {
      title: 'Eyes',
      currentValue: this.vitals.eyes
    };
    this._editStringValue(config);
  }

  public editHair(): void {
    const config = {
      title: 'Hair',
      currentValue: this.vitals.hair
    };
    this._editStringValue(config);
  }

  public editSkin(): void {
    const config = {
      title: 'Skin',
      currentValue: this.vitals.skin
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
            this._service.setPartialVitals({age: value});
            break;
          case 'Height':
            this._service.setPartialVitals({height: value});
            break;
          case 'Weight':
            this._service.setPartialVitals({weight: value});
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

    console.log(config);

    const modal = this._dialogService.open(EditStringComponent, {data: config});
    const modalSubscription = modal.afterClosed$.subscribe((value: string) => {
      if (value.length >= config.minLenth && value.length <= config.maxLength) {
        switch (config.title) {
          case 'Eyes':
            this._service.setPartialVitals({eyes: value});
            break;
          case 'Hair':
            this._service.setPartialVitals({hair: value});
            break;
          case 'Skin':
            this._service.setPartialVitals({skin: value});
            break;
          default:
            break;
        }
      }
      modalSubscription.unsubscribe();
    });
  }

}
