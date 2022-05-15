import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Currency} from '@app/models';
import {EditCurrencyComponent} from './edit-currency/edit-currency.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {

  @Input() currency: Currency;

  constructor(
    private _service: CharacterService,
    private _dialog: DialogService
  ) {}

  public editCurrency(): void {
    const modal = this._dialog.open(EditCurrencyComponent, {
      data: {
        cash: this.currency
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((result: Currency) => {
      if (result) { this._service.setCurrency(result); }
      modalSubscription.unsubscribe();
    });
  }

}
