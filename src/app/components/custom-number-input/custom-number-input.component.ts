import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-number-input',
  templateUrl: './custom-number-input.component.html',
  styleUrls: ['./custom-number-input.component.scss']
})
export class CustomNumberInputComponent implements OnInit {

  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() stepValue = 1;
  @Input() currentValue: number;
  @Input() plusSign = '+';
  @Input() minusSign = '-';

  @Output() valueChange = new EventEmitter<number>();

  ngOnInit(): void {
    if (isNaN(this.currentValue)) {
      this.currentValue = this.minValue;
    }
  }

  public adjustValue(stepValue: number): void {
    this.currentValue = Math.max(
      this.minValue,
      Math.min(
        this.maxValue, this.currentValue + stepValue
      )
    );
    this.valueChange.emit(this.currentValue);
  }

}
