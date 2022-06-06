import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Distances, LevelUpStrategy, LocalStorageKey, SettingsEntity} from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private static readonly defaultSettings: SettingsEntity = {
    units: Distances.METERS,
    levelUpStrategy: LevelUpStrategy.MAX,
    shortRestStrategy: LevelUpStrategy.MAX
  };

  private _settingsSubject = new BehaviorSubject<SettingsEntity>(SettingsService.defaultSettings);
  public readonly settings$ = this._settingsSubject.asObservable();

  public get distanceUnitSetting(): Distances {
    return this._settingsSubject.value.units;
  }

  public set distanceUnitSetting(setting: Distances) {
    this._settingsSubject.next({
      ...this._settingsSubject.value,
      units: setting
    });
  }

  public get levelUpStrategySetting(): LevelUpStrategy {
    return this._settingsSubject.value.levelUpStrategy;
  }

  public set levelUpStrategySetting(setting: LevelUpStrategy) {
    this._settingsSubject.next({
      ...this._settingsSubject.value,
      levelUpStrategy: setting
    });
  }

  public set shortRestStrategySetting(setting: LevelUpStrategy) {
    this._settingsSubject.next({
      ...this._settingsSubject.value,
      shortRestStrategy: setting
    });
  }

  public get shortRestStrategySetting(): LevelUpStrategy {
    return this._settingsSubject.value.shortRestStrategy;
  }

  public get settings(): SettingsEntity {
    return this._settingsSubject.value;
  }

  public set settings(settings: SettingsEntity) {
    this._settingsSubject.next(settings);
  }

  constructor() {
    this._readSettingsFromStorage();
  }

  private _readSettingsFromStorage(): void {
    try {
      const settings = JSON.parse(localStorage.getItem(LocalStorageKey.SETTINGS));
      if (settings) { this._settingsSubject.next(settings); }
    } catch (e) {
      console.warn(e);
    }
  }

  public saveSettingsToStorage(): void {
    try {
      localStorage.setItem(LocalStorageKey.SETTINGS, JSON.stringify(this._settingsSubject.value));
    } catch (e) {
      console.warn(e);
    }
  }

}
