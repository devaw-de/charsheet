import {Component, OnInit} from '@angular/core';
import {Dice} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {ClassHelper} from '@app/helpers';

@Component({
  selector: 'app-hit-dice',
  templateUrl: './hit-dice.component.html',
  styleUrls: ['./hit-dice.component.scss']
})
export class HitDiceComponent extends CharacterSheetBaseComponent implements OnInit {

  Dice = Dice;

  public hitDieType: Dice;

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

  ngOnInit(): void {
    this.hitDieType = ClassHelper.getHitDieByClassName(this.characterClassName);
  }

  public getValue(dice: Dice): number {
    if (this.hitDieType !== dice) {
      return 0;
    }

    return this._character.hitDice;
  }

}
