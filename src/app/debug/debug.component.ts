import {Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {Dice} from '@app/models';
import {DieRollComponent} from '../components/modals/die-roll/die-roll.component';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: []
})
export class DebugComponent {

  Dice = Dice;

  constructor(
    private _dialog: DialogService
  ) {}

  public openShit(die: Dice): void {
    this._dialog.open( DieRollComponent, {
      data: {
        dieType: die
      }
    });
  }

}
