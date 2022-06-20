import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {

  @Input() public label: string;
  @Input() public checked = false;
  @Input() public disabled = false;

  @Output() public stateChange = new EventEmitter<boolean>();

  public toggleState(): void {
    this.checked = !this.checked;
    this.stateChange.emit(this.checked);
  }

}
