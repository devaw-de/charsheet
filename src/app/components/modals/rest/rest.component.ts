import {Component} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {CharacterService, SettingsService} from '@app/services';
import {ButtonStyle, Dice, HitPoints, LevelUpStrategy, RestStep, RestType} from '@app/models';
import {CustomRadioOption} from '../../custom-radio/custom-radio.component';
import {AbilityHelper, ClassHelper, DiceHelper, EnumHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../../../views/character-sheet/_base/character-sheet-base.component';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent extends CharacterSheetBaseComponent {

  RestStep = RestStep;
  RestType = RestType;
  ButtonStyle = ButtonStyle;

  public restType: RestType;
  public steps: Array<RestStep> = EnumHelper.enumToArray(RestStep);
  public currentStep: RestStep = RestStep.SELECTION;
  public restTypeOptions: Array<CustomRadioOption> = [
    {
      id: RestType.SHORT,
      text: RestType.SHORT.toString(),
      selected: false
    },
    {
      id: RestType.LONG,
      text: RestType.LONG.toString(),
      selected: false
    }
  ];
  public selectedDice = 0;

  public get hitPoints(): HitPoints {
    return this._characterService.getCharacter().hitPoints;
  }

  public get strategy(): LevelUpStrategy {
    return this._settingsService.shortRestStrategySetting;
  }

  public get hitDiceArray(): Array<undefined> {
    return Array(this.hitDice);
  }

  public get hitDiceType(): Dice {
    return ClassHelper.getHitDieByClassName(
      this._characterService.getCharacter().className
    );
  }

  public get expectedHitDiceResult(): number {
    return Math.min(
      Math.ceil(this._character.level / 2),
      this._character.level - this._character.hitDice
    );
  }

  public get expectedHitPointsResult(): string {
    if (this._character.hitPoints.current === this._character.hitPoints.max) {
      return 'You are at full health and will not gain any hitpoints.';
    }

    // TODO: Adjust for Toughness
    const conBonus = AbilityHelper.getAbilityModifier(this.characterAttributes.con);
    const avg = this.selectedDice * Math.max(1, conBonus + DiceHelper.getAverageDieValue(this.hitDiceType));
    const max = this.selectedDice * Math.max(1, conBonus + DiceHelper.getMaxDieValue(this.hitDiceType));
    const min = (conBonus + 1) * this.selectedDice;

    switch (this.strategy) {
      case LevelUpStrategy.AVG:
        return `You will gain ${avg} hitpoints.`;
      case LevelUpStrategy.MAX:
        return `You will gain ${max} hitpoints.`;
      case LevelUpStrategy.ROLL:
        return min === max
               ? `You will gain ${max} hitpoints.`
               : `You will gain between ${min} and ${max} hitpoints`;
    }

    return '';
  }

  constructor(
    protected _characterService: CharacterService,
    private _settingsService: SettingsService,
    private _dialogRef: DialogRef
  ) {
    super(_characterService);
  }

  public setRestTypeOption(selectedOption: CustomRadioOption): void {
    this.restType = selectedOption.id as RestType;
    window.setTimeout(
      () => {
        this.currentStep = RestStep.HIT_DICE;
      }, 250
    );
  }

  public selectDice(i: number): void {
    window.setTimeout(
      () => {
        this.selectedDice = i;
      }, 250
    );
  }

  public doRest(): void {
    switch (this.restType) {
      case RestType.LONG:
        this._handleLongRest();
        break;
      case RestType.SHORT:
        this._handleShortRest();
        break;
    }
  }

  private _handleShortRest(): void {
    const hitPoints = this._getShortRestHitPoints();
    this._characterService.takeDamage(0 - hitPoints);
    this._characterService.addHitDice(0 - this.selectedDice);
    this._dialogRef.close();
  }

  private _handleLongRest(): void {
    this._characterService.takeDamage(0 - this._character.hitPoints.max);
    this._characterService.addHitDice(this.expectedHitDiceResult);
    this._dialogRef.close();
  }

  private _getShortRestHitPoints(): number {
    const conModifier = Math.max(0, AbilityHelper.getAbilityModifier(this.characterAttributes.con));
    switch (this.strategy) {
      case LevelUpStrategy.MAX:
        return (conModifier + DiceHelper.getMaxDieValue(this.hitDiceType)) * this.selectedDice;
      case LevelUpStrategy.AVG:
        return (conModifier + DiceHelper.getAverageDieValue(this.hitDiceType)) * this.selectedDice;
      case LevelUpStrategy.ROLL:
        let dieTotal = 0;
        for (let i = 0; i < this.selectedDice; i++) {
          dieTotal += DiceHelper.getRandomDieValue(this.hitDiceType) + conModifier;
        }
        return dieTotal;
    }
  }

}
