import {Component, EventEmitter, Output} from '@angular/core';
import {Dice} from '@app/models';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-inspiration-modal',
  templateUrl: './inspiration-modal.component.html',
  styleUrls: ['/inspiration-modal.component.scss']
})
export class InspirationModalComponent {

  Dice = Dice;

  public readonly dice = EnumHelper.enumToArray(Dice);

  @Output() selection$ = new EventEmitter<Dice>();

}
