import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterBackgroundDetails } from '../model/backgrounds';
import { PlayerCharacterData } from '../model/character';
import { CharacterClassName } from '../model/characterClasses';
import { CharacterRace, CharacterSubRaceName } from '../model/characterRaces';
import { Utils } from '../lib/utils';
import { CharacterService } from '../lib/character.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  public availableClasses: Array<CharacterClassName>;
  public availableRaces: Array<CharacterRace>;
  public character: PlayerCharacterData;

  constructor(
    private _router: Router,
    private _service: CharacterService
  ) {
    this._service.createNewCharacter();
    this.character = this._service.getCharacter();
    this.availableClasses = Utils.getClassesList();
    this.availableRaces = Utils.getRacesList();
  }

  public setCharacterClass(charClass: CharacterClassName): void {
    this._service.setClass(charClass);
  }

  public setCharacterRace(race: CharacterRace): void {
    this._service.setRace(race);
  }

  public setCharacterSubRace(subRace: CharacterSubRaceName): void {
    this._service.setSubRace(subRace);
  }

  public setCharacterBackground(background: CharacterBackgroundDetails): void {
    this._service.setBackground(background.name);
  }

  public showCharacterSheet(ev?): void {
    if (ev) {
      this.character.attributes = ev;
      this._router.navigate(['/sheet'], {state: this.character});
    } else {
      this._router.navigate(['/sheet']);
    }


  }

}
