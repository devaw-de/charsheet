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
    console.log(Utils.getMaxDieValue(Dice.D6), Utils.getAverageDieValue(Dice.D6), Utils.getRandomDieValue(Dice.D6));
    console.log(Utils.getMaxDieValue(Dice.D8), Utils.getAverageDieValue(Dice.D8), Utils.getRandomDieValue(Dice.D8));
    console.log(Utils.getMaxDieValue(Dice.D10), Utils.getAverageDieValue(Dice.D10), Utils.getRandomDieValue(Dice.D10));
    console.log(Utils.getMaxDieValue(Dice.D12), Utils.getAverageDieValue(Dice.D12), Utils.getRandomDieValue(Dice.D12));

  }

}
