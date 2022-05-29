import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {
  CharacterBackgroundDetails,
  CharacterClassName,
  CharacterRace,
  CharacterSubRaceName,
  PlayerCharacterData
} from '@app/models';
import {CharacterService} from '@app/services';
import {EnumHelper} from '@app/helpers';

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
    // this.character = this._service.getCharacter();
    this.availableClasses = EnumHelper.getClassesList();
    this.availableRaces = EnumHelper.getRacesList();
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

  public async showCharacterSheet(ev?): Promise<void> {
    if (ev) {
      this.character.attributes = ev;
      await this._router.navigate(['/'], {state: this.character});
    } else {
      await this._router.navigate(['/']);
    }
  }

}
