import {Component} from '@angular/core';
import {Distances, LevelUpStrategy} from '@app/models';
import {Router} from '@angular/router';
import {CustomRadioOption} from '../../components/custom-radio/custom-radio.component';
import {SettingsService} from '@app/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public distanceSettingsOptions: Array<CustomRadioOption> = [
    {
      id: Distances.FEET,
      text: 'Use imperial distance units',
      selected: this._settingsService.distanceUnitSetting === Distances.FEET
    },
    {
      id: Distances.METERS,
      text: 'Use metric distance units',
      selected: this._settingsService.distanceUnitSetting === Distances.METERS
    }
  ];

  public levelupStrategyOptions: Array<CustomRadioOption> = [
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

  public shortRestStrategyOptions: Array<CustomRadioOption> = [
    {
      id: LevelUpStrategy.ROLL,
      text: 'Roll',
      selected: this._settingsService.shortRestStrategySetting === LevelUpStrategy.ROLL,
    },
    {
      id: LevelUpStrategy.MAX,
      text: 'Maximum',
      selected: this._settingsService.shortRestStrategySetting === LevelUpStrategy.MAX
    },
    {
      id: LevelUpStrategy.AVG,
      text: 'Average',
      selected: this._settingsService.shortRestStrategySetting === LevelUpStrategy.AVG
    }
  ];

  constructor(
    private _router: Router,
    private _settingsService: SettingsService
  ) {
  }

  public changeDistanceSetting(selectedOption: CustomRadioOption): void {
    this._settingsService.distanceUnitSetting = selectedOption.id as Distances;
    this.distanceSettingsOptions.forEach(option => {
      option.selected = option.id === selectedOption.id;
    });
  }

  public changeLevelUpStrategy(selectedOption: CustomRadioOption): void {
    this._settingsService.levelUpStrategySetting = selectedOption.id as LevelUpStrategy;
    this.levelupStrategyOptions.forEach(option => {
      option.selected = option.id === selectedOption.id;
    });
  }

  public changeShortRestStrategy(selectedOption: CustomRadioOption): void {
    this._settingsService.shortRestStrategySetting = selectedOption.id as LevelUpStrategy;
    this.shortRestStrategyOptions.forEach(option => {
      option.selected = option.id === selectedOption.id;
    });
  }

  public async navigate(): Promise<void> {
    await this._router.navigate(['/']);
  }

}
