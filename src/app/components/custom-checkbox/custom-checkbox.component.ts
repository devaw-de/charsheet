import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {

  @Input() public label: string;
  @Input() public checked = false;
  @Input() public canBeActivated = true;
  @Input() public canBeDeactivated = true;
  @Input() public set disabled(isDisabled: boolean) {
    if (isDisabled) {
      this.canBeActivated = false;
      this.canBeDeactivated = false;
    }
  }

  @Output() public stateChange = new EventEmitter<boolean>();

  public toggleState(): void {
    const newState = !this.checked;

    if (
      (newState && !this.canBeActivated)
      || (!newState && !this.canBeDeactivated)
    ) {
      return;
    }

    this.checked = newState;
    this.stateChange.emit(this.checked);
  }

}
