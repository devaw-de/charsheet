import {Component} from '@angular/core';
import {Dice} from '@app/models';
import {DialogService} from '@ngneat/dialog';
import {InspirationModalComponent} from '../../../components/modals/inspiration-modal/inspiration-modal.component';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent {

  Dice = Dice;

  public currentInspirationDie: Dice;

  constructor(
    private _dialogService: DialogService
  ) { }

  public handleClick(): void {
    if (this.currentInspirationDie) {
      this.currentInspirationDie = null;
      return;
    }

    const modal = this._dialogService.open(InspirationModalComponent);
    const modalSubscription = modal.ref.instance.selection$.subscribe((die: Dice) => {
      this.currentInspirationDie = die;
      modal.close();
      modalSubscription.unsubscribe();
    });


  }

}
