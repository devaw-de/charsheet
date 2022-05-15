import {Component, Input} from '@angular/core';
import {HitPoints} from '@app/models';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.scss']
})
export class HitpointsComponent {

  @Input() hitpoints: HitPoints;

}
