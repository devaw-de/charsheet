import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../lib/character.service';
import { PlayerCharacterData } from '../model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public character: PlayerCharacterData;

  constructor(
    private _router: Router,
    private _service: CharacterService
  ) {
    this.character = this._service.getCharacter();
  }

  ngOnInit(): void {
    this._loadCharacter();
  }

  public toBuilder(): void {
    this._router.navigate(['']);
  }

  public exportCharacter(): void {

  }

  public saveCharacter(): void {
    localStorage.setItem('character', JSON.stringify(this._service.getCharacter()));
  }

  public isLocalDataAvailable(): boolean {
    return !!localStorage.getItem('character');
  }

  private _loadCharacter(): void {
    this._service.loadCharacter();
    this.character = this._service.getCharacter();
  }

  public clearLocalData(): void {
    localStorage.clear();
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
