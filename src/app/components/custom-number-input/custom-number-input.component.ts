import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-number-input',
  templateUrl: './custom-number-input.component.html',
  styleUrls: ['./custom-number-input.component.scss']
})
export class CustomNumberInputComponent implements OnInit {

  private _minValue = 0;
  private _maxValue = 99;
  private _currentValue = 1;
  private _stepValue = 1;

  @Input() set minValue(value: number) {
    if (!isNaN(value)) {
      this._minValue = value;
    }
  }
  public get minValue(): number {
    return this._minValue;
  }
  @Input() set maxValue(value: number) {
    if (!isNaN(value)) {
      this._maxValue = value;
    }
  }
  public get maxValue(): number {
    return this._maxValue;
  }
  @Input() set stepValue(value: number){
    if (!isNaN(value)) {
      this._stepValue = value;
    }
  }
  public get stepValue(): number {
    return this._stepValue;
  }
  @Input() set currentValue(value: number) {
    if (!isNaN(value)) {
      this._currentValue = value;
    }
  }
  public get currentValue(): number {
    return this._currentValue;
  }
  @Input() hideDisabledButtons = false;
  @Input() plusSign = '+';
  @Input() minusSign = '-';

  @Output() valueChange = new EventEmitter<number>();

  ngOnInit(): void {
    if (isNaN(this.currentValue)) {
      this.currentValue = this.minValue;
    }
  }

  public adjustValue(stepValue: number): void {
    const value = Math.max(
      this.minValue,
      Math.min(
        this.maxValue, this.currentValue + stepValue
      )
    );
    this.currentValue = isNaN(value) ? this.currentValue : value;
    this.valueChange.emit(this.currentValue);
  }

  public debug(): void {
    console.log(
      'current , step, min, max',
      this.currentValue,
      this.stepValue,
      this.minValue,
      this.maxValue
    );
  }

}
