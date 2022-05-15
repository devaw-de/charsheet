import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spell-list-table',
  templateUrl: './spell-list-table.component.html',
  styleUrls: ['./spell-list-table.component.scss']
})
export class SpellListTableComponent {

  @Input() spells: Array<number>;

}
