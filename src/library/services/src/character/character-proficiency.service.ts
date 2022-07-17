import {Injectable} from '@angular/core';
import {Language, PlayerCharacterData, SkillName, Tool} from '@app/models';
import {Subscription} from 'rxjs';
import {CharacterDataService} from './character-data.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterProficiencyService {

  private _character: PlayerCharacterData;
  private readonly _characterSubscription: Subscription;

  constructor(
    private _dataService: CharacterDataService
  ) {
    this._characterSubscription = this._dataService.character$.subscribe(
      char => this._character = char
    );
  }

  public addSkills(skills: Array<SkillName>): void {
    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        skills: skills.concat(this._character.proficiencies.skills ?? [])
      }
    });
  }

  public addLanguages(languages: Array<Language>): void {
    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        languages: languages.concat(this._character.proficiencies.languages ?? [])
      }
    });
  }

  public addToolProficiencies(profs: Array<Tool>): void {
    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        tools: profs.concat(this._character.proficiencies.tools ?? [])
      }
    });
  }

  public addInstrumentProficiencies(profs: Array<string>): void {
    this._dataService.setPartial({
      proficiencies: {
        ...this._character.proficiencies,
        instruments: profs.concat(this._character.proficiencies.instruments ?? [])
      }
    });
  }

}
