import {Component} from '@angular/core';
import {Distances, LevelUpStrategy, Settings} from '@app/models';
import {Router} from '@angular/router';
import {CustomRadioOptions} from '../elements/custom-radio/custom-radio.component';
import {SettingsService} from '@app/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  Distances = Distances;
  Settings = Settings;

  public distanceSettingsOptions: Array<CustomRadioOptions> = [
    {
      id: Distances.FEET,
      text: 'Use imperial distance units',
      selected: false
    },
    {
      id: Distances.METERS,
      text: 'Use metric distance units',
      selected: true
    }
  ];

  public levelupStrategyOptions: Array<CustomRadioOptions> = [
    {
      id: LevelUpStrategy.ROLL,
      text: 'Roll',
      selected: false,
      disabled: true
    },
    {
      id: LevelUpStrategy.MAX,
      text: 'Maximum',
      selected: this._settingsService.levelUpStrategySetting === LevelUpStrategy.MAX
    },
    {
      id: LevelUpStrategy.AVG,
      text: 'Average',
      selected: this._settingsService.levelUpStrategySetting === LevelUpStrategy.AVG
    }
  ];

  constructor(
    private _router: Router,
    private _settingsService: SettingsService
  ) {
  }

  public changeDistanceSetting(selectedId: string): void {
    this._settingsService.distanceUnitSetting = selectedId as Distances;
    this.distanceSettingsOptions.forEach(option => {
      option.selected = option.id === selectedId;
    });
  }

  public changeLevelUpStrategy(selectedId: string): void {
    this._settingsService.levelUpStrategySetting = selectedId as LevelUpStrategy;
    this.levelupStrategyOptions.forEach(option => {
      option.selected = option.id === selectedId;
    });
  }

  public navigate(): void {
    this._router.navigate(['/']);
  }

}
