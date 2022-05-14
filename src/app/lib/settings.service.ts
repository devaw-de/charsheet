import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Distances, LevelUpStrategy} from '../model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private static readonly defaultDistanceUnit = Distances.METERS;
  private static readonly defaultLevelUpStrategy = LevelUpStrategy.MAX;

  private _distanceUnitsSubject = new BehaviorSubject<Distances>(SettingsService.defaultDistanceUnit);
  private _levelUpStrategySubject = new BehaviorSubject<LevelUpStrategy>(SettingsService.defaultLevelUpStrategy);
  public readonly distanceUnitsSetting$ = this._distanceUnitsSubject.asObservable();
  public readonly levelUpStrategySetting$ = this._levelUpStrategySubject.asObservable();

  public get distanceUnitSetting(): Distances {
    return this._distanceUnitsSubject.value;
  }

  public set distanceUnitSetting(setting: Distances) {
    this._distanceUnitsSubject.next(setting);
  }

  public get levelUpStrategySetting(): LevelUpStrategy {
    return this._levelUpStrategySubject.value;
  }

  public set levelUpStrategySetting(setting: LevelUpStrategy) {
    this._levelUpStrategySubject.next(setting);
  }

}
