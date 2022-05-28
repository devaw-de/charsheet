import {Component} from '@angular/core';
import {Ammunition} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-ammunition',
  templateUrl: './ammunition.component.html',
  styleUrls: ['./ammunition.component.scss']
})
export class AmmunitionComponent extends CharacterSheetBaseComponent {

  public get ammunition(): Array<Ammunition> {
    return this._character.ammunition;
  }

  constructor(
    protected _characterService: CharacterService,
  ) {
    super(_characterService);
  }

}
