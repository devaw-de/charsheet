import { Component, Input } from '@angular/core';
import { HitPoints } from 'src/app/model/character';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.scss']
})
export class HitpointsComponent {

  @Input() hitpoints: HitPoints;

}
