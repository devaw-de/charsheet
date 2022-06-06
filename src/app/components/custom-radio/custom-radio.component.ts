import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface CustomRadioOption {
  id: string;
  text: string;
  selected: boolean;
  disabled?: boolean;
  className?: string;
}

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent {

  @Input() options: Array<CustomRadioOption> = [];
  @Output() optionSelected = new EventEmitter<CustomRadioOption>();

  public selectOption(option: CustomRadioOption): void {
    this.options.forEach(o => o.selected = o.id === option.id);
    this.optionSelected.emit(option);
  }

}
