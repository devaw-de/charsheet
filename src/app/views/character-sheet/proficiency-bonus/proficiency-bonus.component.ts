import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.scss']
})
export class ProficiencyBonusComponent {

  @Input() bonus: number;

}
