import {Component} from '@angular/core';
import {CharacterService, SettingsService} from '@app/services';
import {Distances} from '@app/models';
import {AbilityHelper, UnitHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.scss']
})
export class ArmorClassComponent extends CharacterSheetBaseComponent {

  public get initiative(): string {
    return AbilityHelper.getAbilityModifierAsString(this.characterAttributes.dex);
  }

  public get movementSpeed(): string {
    return this._settingsService.distanceUnitSetting === Distances.FEET
           ? this._character.movementSpeedInFeet.toString() + '\''
           : UnitHelper.feetToMeters(this._character.movementSpeedInFeet) + 'm';
  }

  constructor(
    protected _characterService: CharacterService,
    private _settingsService: SettingsService
  ) {
    super(_characterService);
  }

}
