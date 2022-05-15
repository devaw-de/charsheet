import {Component, Input} from '@angular/core';
import {CharacterClassName} from 'src/app/model/characterClasses';

@Component({
  selector: 'app-class-icon',
  templateUrl: './class-icon.component.html',
  styleUrls: ['./class-icon.component.scss']
})
export class ClassIconComponent {

  @Input() characterClass: CharacterClassName;

}
