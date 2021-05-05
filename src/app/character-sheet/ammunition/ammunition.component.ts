import { Component, Input } from '@angular/core';
import { Ammunition } from 'src/app/model/weapons';

@Component({
  selector: 'app-ammunition',
  templateUrl: './ammunition.component.html',
  styleUrls: ['./ammunition.component.scss']
})
export class AmmunitionComponent {

  @Input() ammunition: Array<Ammunition>;

}
