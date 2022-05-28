import {Component, Input} from '@angular/core';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent extends CharacterSheetBaseComponent {

  public lines = new Array(7);

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

}
