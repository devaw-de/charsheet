import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../lib/character.service';
import { Utils } from '../lib/utils';
import { Dice } from '../model/base';
import { PlayerCharacterData } from '../model/character';
import { CharacterClass, CharacterClassesList } from '../model/characterClasses';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  public character: PlayerCharacterData;

  constructor(
    private _router: Router,
    private _service: CharacterService
  ) {
    this.character = this._service.getCharacter();
  }

  public toBuilder(): void {
    this._router.navigate(['']);
  }

  public exportCharacter(): void {

  }

  public debug(): void {
    console.dir(this._service.getCharacter());
  }

  public test(): void {
    const str = this._service.getCharacter().attributes.str;
    const dex = this._service.getCharacter().attributes.dex;
    const con = this._service.getCharacter().attributes.con;
    const int = this._service.getCharacter().attributes.int;
    const wis = this._service.getCharacter().attributes.wis;
    const cha = this._service.getCharacter().attributes.cha;

    console.warn('Attributes: ' + str + '/' + dex + '/' + con + '/' + int + '/' + wis + '/' + cha);
    console.warn('AppliedRacialstuff');
    console.warn(this._service.getCharacter().appliedRacialBonuses);
  }

}
