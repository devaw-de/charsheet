import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface CustomRadioOptions {
  id: string;
  text: string;
  selected: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent {

  @Input() options: Array<CustomRadioOptions> = [];
  @Output() optionSelected = new EventEmitter<string>();

  public selectOption(option: CustomRadioOptions): void {
    this.options.forEach(o => o.selected = o.id === option.id);
    this.optionSelected.emit(option.id);
  }

}
