import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {

  @Input() weapons: any;

  public lines = new Array(7);

}
