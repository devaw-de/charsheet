import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {DialogRef, DialogService} from '@ngneat/dialog';
import {Dice, HistoryLog, HitPoints} from '@app/models';
import {DiceHelper} from '@app/helpers';
import {Subscription} from 'rxjs';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnDestroy {

  private readonly _characterSubscription: Subscription;

  public rawValues: Array<number> = [1, 2, 3,  4, 5, 10];
  public diceValues: Array<any> = [
    Dice.D4,
    Dice.D6,
    Dice.D8,
    Dice.D10,
    Dice.D12,
    Dice.D20
  ];
  public history = new HistoryLog<number>(10);
  public characterHitpoints: HitPoints;

  @Output() public damageTaken$ = new EventEmitter<number>();

  constructor(
    private _dialogService: DialogService,
    private _dialogRef: DialogRef,
    private _characterService: CharacterService
  ) {
    this._characterSubscription = this._characterService.character$.subscribe(
      character => this.characterHitpoints = character.hitPoints
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

  public takeFixedDamage(damage: number): void {
    this.history.addItem(damage);
    this.damageTaken$.emit(damage);
  }

  public takeDieDamage(die: Dice): void {
    const damage = DiceHelper.getRandomDieValue(die);
    this.history.addItem(damage);
    this.damageTaken$.emit(damage);
  }

}
