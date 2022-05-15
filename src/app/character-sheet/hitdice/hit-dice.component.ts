import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Dice} from '@app/models';

@Component({
  selector: 'app-hit-dice',
  templateUrl: './hit-dice.component.html',
  styleUrls: ['./hit-dice.component.scss']
})
export class HitDiceComponent implements OnInit, AfterViewInit {

  @Input() hitDice: Array<Dice>;
  public d6 = 0;
  public d8 = 0;
  public d10 = 0;
  public d12 = 0;

  ngOnInit(): void {
    this.d6 = this.hitDice.filter(d => d === Dice.D6).length;
    this.d8 = this.hitDice.filter(d => d === Dice.D8).length;
    this.d10 = this.hitDice.filter(d => d === Dice.D10).length;
    this.d12 = this.hitDice.filter(d => d === Dice.D12).length;
  }

  ngAfterViewInit(): void {

  }
}
