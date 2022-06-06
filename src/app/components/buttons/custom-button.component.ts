import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonStyle} from '@app/models';

@Component({
  selector: 'app-custom-button',
  templateUrl: 'custom-button.component.html',
  styleUrls: ['custom-button.component.scss']
})
export class CustomButtonComponent {

  ButtonStyle = ButtonStyle;

  @Input() label = '';
  @Input() style: ButtonStyle = ButtonStyle.PRIMARY;
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<MouseEvent>();

  public handleClick(ev: MouseEvent): void {
    if (!this.disabled) {
      this.clickEvent.emit(ev);
    }
  }

}
