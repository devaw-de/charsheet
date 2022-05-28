import {Component, OnInit} from '@angular/core';
import {Dice} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-hit-dice',
  templateUrl: './hit-dice.component.html',
  styleUrls: ['./hit-dice.component.scss']
})
export class HitDiceComponent extends CharacterSheetBaseComponent implements OnInit {

  public d6 = 0;
  public d8 = 0;
  public d10 = 0;
  public d12 = 0;

  public get hitDice(): Array<Dice> {
    return this._character.hitDice;
  }

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

  ngOnInit(): void {
    this.d6 = this.hitDice.filter(d => d === Dice.D6).length;
    this.d8 = this.hitDice.filter(d => d === Dice.D8).length;
    this.d10 = this.hitDice.filter(d => d === Dice.D10).length;
    this.d12 = this.hitDice.filter(d => d === Dice.D12).length;
  }

}
