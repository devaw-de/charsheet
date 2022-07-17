import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {JsonHelper} from '@app/helpers';
import {DefaultCharacter, LocalStorageKey, PlayerCharacterData} from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {

  private _character = new BehaviorSubject<PlayerCharacterData>(null);
  public character$ = this._character.asObservable();

  constructor() {
    this._readCharacterFromStorage();
  }

  public createNewCharacter(): void {
    this.next({...DefaultCharacter});
  }

  private _readCharacterFromStorage(): void {
    try {
      const character = JsonHelper.parseCharacter(localStorage.getItem(LocalStorageKey.CHARACTER));
      if (!character) {
        console.log('No character found data in LocalStorage. Using default character.');
        this._character.next(DefaultCharacter);
        return;
      }
      console.log('Character restored from LocalStorage.', character);
      this._character.next(character);
    } catch (e) {
      console.warn(e);
      this._character.next(DefaultCharacter);
    }
  }

  public saveCharacterToStorage(): void {
    localStorage.setItem(
      LocalStorageKey.CHARACTER,
      JsonHelper.stringifyCharacter(this._character.value)
    );
  }

  public next(character: PlayerCharacterData): void {
    this._character.next(character);
  }

  public setPartial(param: Partial<PlayerCharacterData>): void {
    this._character.next({
      ...this._character.value,
      ...param
    });
  }
}
