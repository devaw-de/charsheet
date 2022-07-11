import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {Currency} from '@app/models';
import {EditCurrencyComponent} from '../../../components/modals/edit-currency/edit-currency.component';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public editCurrency(): void {
    const modal = this._dialogService.open(EditCurrencyComponent, {
      data: {
        cash: this._character.currency
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((result: Currency) => {
      if (result) { this._characterService.setCurrency(result); }
      modalSubscription.unsubscribe();
    });
  }

}
