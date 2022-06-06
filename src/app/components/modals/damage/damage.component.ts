import {Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {DialogRef, DialogService} from '@ngneat/dialog';
import {ButtonStyle, Dice, HistoryLog, HitPoints} from '@app/models';
import {DiceHelper, EnumHelper} from '@app/helpers';
import {Subscription} from 'rxjs';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnDestroy {

  ButtonStyle = ButtonStyle;

  private readonly _characterSubscription: Subscription;

  public animating = false;
  public rawValues: Array<number> = [1, 2, 3, 4, 5, 10];
  public diceValues: Array<any> = EnumHelper.enumToArray(Dice);
  public history = new HistoryLog<number>(10);
  public characterHitPoints: HitPoints;

  @Output() public hitPointChange$ = new EventEmitter<number>();

  @ViewChild('currentHitPointsElement') currentHitPointsElement: ElementRef<HTMLDivElement>;

  constructor(
    private _dialogService: DialogService,
    private _dialogRef: DialogRef,
    private _characterService: CharacterService
  ) {
    this._characterSubscription = this._characterService.character$.subscribe(
      character => this.characterHitPoints = character.hitPoints
    );
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

  private _triggerAnimation(): void {
    if (this.animating) { return; }

    this.animating = true;
    this.currentHitPointsElement.nativeElement.classList.add('heartbeat');
    window.setTimeout(() => {
      this.currentHitPointsElement.nativeElement.classList.remove('heartbeat');
      this.animating = false;
      }, 500
    );
  }

  public adjustHitPointsByValue(value: number, isDamage: boolean = false): void {
    this._triggerAnimation();
    const netHealing = isDamage ? (0 - value) : value;
    this.history.addItem(netHealing);
    this.hitPointChange$.emit(netHealing);
  }

  public adjustHitPointsByDie(die: any, isDamage: boolean = false): void {
    this._triggerAnimation();
    const value = DiceHelper.getRandomDieValue(die);
    const netHealing = isDamage ? (0 - value) : value;
    this.history.addItem(netHealing);
    this.hitPointChange$.emit(netHealing);
  }

}
