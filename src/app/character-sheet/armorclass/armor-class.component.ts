import {Component, Input} from '@angular/core';
import {PlayerCharacterData} from 'src/library/models/src/lib/src/character';
import {SettingsService} from '@app/services';
import {Distances} from '@app/models';
import {AbilityHelper, UnitHelper} from '@app/helpers';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.scss']
})
export class ArmorClassComponent {

  @Input() character: PlayerCharacterData;

  constructor(
    private _settingsService: SettingsService
  ) {
  }

  public get initiative(): string {
    return AbilityHelper.getAbilityModifierAsString(this.character.attributes.dex);
  }

  public get movementSpeed(): string {
    return this._settingsService.distanceUnitSetting === Distances.FEET
      ? this.character.movementSpeedInFeet.toString() + '\''
      : UnitHelper.feetToMeters(this.character.movementSpeedInFeet) + 'm';
  }

}
