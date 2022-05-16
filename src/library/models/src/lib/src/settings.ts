export enum LevelUpStrategy {
  MAX = 'MAX',
  AVG = 'AVG',
  ROLL = 'ROLL'
}

export enum Settings {
  DISTANCES = 'DISTANCES'
}

export enum Distances {
  FEET = 'FEET',
  METERS = 'METERS'
}

export interface SettingsEntity {
  units: Distances;
  levelUpStrategy: LevelUpStrategy;
}

export enum LocalStorageKey {
  SETTINGS = 'SETTINGS',
  CHARACTER = 'CHARACTER'
}
