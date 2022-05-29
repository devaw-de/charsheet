import {Component} from '@angular/core';
import {CharacterSheetBaseComponent} from '../../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-spell-stats',
  templateUrl: './spell-stats.component.html',
  styleUrls: ['./spell-stats.component.scss']
})
export class SpellStatsComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

}
