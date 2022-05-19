import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Dice, DiceDetails} from '@app/models';
import {DiceHelper} from '@app/helpers';
import {DialogRef} from '@ngneat/dialog';

@Component({
  selector: 'app-die-roll',
  templateUrl: './die-roll.component.html',
  styleUrls: [
    './die-roll.component.scss',
    './die-roll.component.animation-frames.scss'
  ]
})
export class DieRollComponent implements OnInit {

  private static _maxHistoryLength = 10;
  private static _exitAnimationDuration = 650;
  private static _shakeAnimationDuration = 800;

  Dice = Dice;

  public hideDieFace = false;
  public history: Array<number> = [];
  public die: DiceDetails;

  public get latestResult(): number {
    if (!this.history.length) { return undefined; }
    return this.history[this.history.length - 1];
  }

  @Input() set dieType(type: Dice) {
    this.die = {
      type,
      max: DiceHelper.getMaxDieValue(type),
      className: 'dice-icon-' + type.toLowerCase()
    };
  }

  @ViewChild('result') resultElement: ElementRef<HTMLDivElement>;

  private static _getExitAnimationClass(): string {
    switch (DiceHelper.getRandomDieValue(Dice.D4)) {
      case 1:
        return 'roll-out-blurred-left';
      case 2:
        return 'roll-out-blurred-right';
      case 3:
        return 'roll-out-blurred-bottom';
      default:
        return 'roll-out-blurred-top';
    }
  }

  constructor(
    private _dialogRef: DialogRef
  ) {}

  ngOnInit(): void {
    this.dieType = this._dialogRef.data.dieType;
  }

  public roll(): void {
    const result = DiceHelper.getRandomDieValue(this.die.type);
    this._animate();
    this._updateHistory(result);
  }

  private _updateHistory(result: number): void {
    window.setTimeout(() => {
      this.history.push(result);
      if (this.history.length > DieRollComponent._maxHistoryLength) {
        this.history = this.history.slice(0 - DieRollComponent._maxHistoryLength);
      }
    }, DieRollComponent._exitAnimationDuration);
  }

  private _animate(): void {
    if (this.resultElement?.nativeElement) {
      const exitAnimationClass = DieRollComponent._getExitAnimationClass();

      this.hideDieFace = true;
      this.resultElement.nativeElement.classList.add(exitAnimationClass);

      window.setTimeout(() => {
        this.resultElement.nativeElement.classList.remove(exitAnimationClass);
        this.resultElement.nativeElement.classList.add('shake-bottom');
        this.hideDieFace = false;
      }, DieRollComponent._exitAnimationDuration);

      window.setTimeout(() => {
        this.resultElement.nativeElement.classList.remove('shake-bottom');
      }, DieRollComponent._exitAnimationDuration + DieRollComponent._shakeAnimationDuration);
    }
  }

}
