import { Component, Input } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { CharacterService } from 'src/app/lib/character.service';
import { Currency } from 'src/app/model/equipment';
import { EditCurrencyComponent } from './edit-currency/edit-currency.component';

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

  public editCurrency() {
    const modal = this._dialog.open(EditCurrencyComponent, {
      data: {
        cash: this.currency
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((result: Currency) => {
      if(result) {
        this._service.setCurrency(result);
      }
    });
  }

}
