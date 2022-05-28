import {Component} from '@angular/core';
import {HitPoints} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.scss']
})
export class HitpointsComponent extends CharacterSheetBaseComponent {

  public get hitpoints(): HitPoints {
    return this._character.hitPoints;
  }

  constructor(
    protected _characterService: CharacterService,
  ) {
    super(_characterService);
  }

}
