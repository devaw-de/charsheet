import {Component} from '@angular/core';
import {DeathSavingThrowState, InitialSavingTrowState, PlayerCharacterData} from '@app/models';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-death-saving-throws',
  templateUrl: './death-saving-throws.component.html',
  styleUrls: ['./death-saving-throws.component.scss']
})
export class DeathSavingThrowsComponent {

  public savingThrows: DeathSavingThrowState;

  private static _getSingularOrPlural(amount: number): string {
    return amount === 1 ? 'throw' : 'throws';
  }

  constructor(
    private _characterService: CharacterService
  ) {
    const character: PlayerCharacterData = this._characterService.getCharacter();
    this.savingThrows = character.deathSavingThrows
                        ? character.deathSavingThrows
                        : { ...InitialSavingTrowState };
  }

  public handleSuccess(): void {
    if (this.savingThrows.successCount > 2) {
      this.savingThrows = { ...InitialSavingTrowState };
    } else {
      this.savingThrows.successCount++;
    }
    this._characterService.setDeathSavingThrowState(this.savingThrows);
  }

  public handleFailure(): void {
    if (this.savingThrows.failureCount > 2) {
      this.savingThrows = { ...InitialSavingTrowState };
    } else {
      this.savingThrows.failureCount++;
    }
    this._characterService.setDeathSavingThrowState(this.savingThrows);
  }

  public getTooltip(): string {
    if (!this.savingThrows.successCount && !this.savingThrows.failureCount) {
      return '';
    }
    const successText = DeathSavingThrowsComponent._getSingularOrPlural(this.savingThrows.successCount);
    const failureText = DeathSavingThrowsComponent._getSingularOrPlural(this.savingThrows.failureCount);
    const successes = `${this.savingThrows.successCount} death saving ${successText} succeeded`;
    const failures = `${this.savingThrows.failureCount} death saving ${failureText} failed`;
    return successes + '\n' + failures;
  }

}
