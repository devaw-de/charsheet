import {Component, Input} from '@angular/core';
import {Utils} from 'src/app/lib/utils';
import {PlayerCharacterData} from 'src/app/model/character';
import {SettingsService} from '../../lib/settings.service';
import {Distances} from '../../model/settings';

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
    return Utils.getAbilityModifierAsString(this.character.attributes.dex);
  }

  public get movementSpeed(): string {
    return this._settingsService.distanceUnitSetting === Distances.FEET
      ? this.character.movementSpeedInFeet.toString() + '\''
      : Utils.feetToMeters(this.character.movementSpeedInFeet) + 'm';
  }

}
