import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DialogRef} from '@ngneat/dialog';
import {Utils} from 'src/app/lib/utils';
import {Attribute} from 'src/app/model/attributes';
import {CharacterRaceDetails, CharacterSubRaceDetails} from 'src/app/model/characterRaces';
import {CharacterAttributes, PlayerCharacterData} from '../../../model/character';

@Component({
  selector: 'app-point-buy',
  templateUrl: './point-buy.component.html',
  styleUrls: ['./point-buy.component.scss']
})
export class PointBuyComponent implements OnInit {

  Math = Math;
  Utils = Utils;
  Attribute = Attribute;

  public readonly totalPoints = 27;
  public remainingPoints = 27;
  public isRacialBonusAvailable = false;
  public remainingRacialBonusPoints = 0;
  public totalRacialBonusPoints = 0;
  public race: CharacterRaceDetails;
  public subRace: CharacterSubRaceDetails;
  public character: PlayerCharacterData;
  public attributes: CharacterAttributes;
  public attributesList: Array<Attribute> = Utils.getAttributesList();
  public form: FormGroup;

  @Output() pointBuyComplete = new EventEmitter<boolean>();

  private static _getPointCost(scoreValue: number): number {
    switch (true) {
      case scoreValue > 7 && scoreValue < 14:
        return scoreValue - 8;
      case scoreValue === 14:
        return 7;
      case scoreValue === 15:
        return 9;
      default:
        return 0;
    }
  }

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      str: new FormControl(8),
      dex: new FormControl(8),
      con: new FormControl(8),
      int: new FormControl(8),
      wis: new FormControl(8),
      cha: new FormControl(8),
      bonus_str: new FormControl(),
      bonus_dex: new FormControl(),
      bonus_con: new FormControl(),
      bonus_int: new FormControl(),
      bonus_wis: new FormControl(),
      bonus_cha: new FormControl()
    });

    this.character = this._dialogRef.data.character;
    this.race = Utils.getRaceDetailsByName(this.character.race);
    this.subRace = Utils.getSubRaceDetailsByName(this.character.subRace);

    // Set flags and limits for pickable attributes
    if (this.race.attributeBonus.pickable) {
      this.isRacialBonusAvailable = true;
      this.totalRacialBonusPoints =  this.race.attributeBonus.pickable;
      this.remainingRacialBonusPoints = this.totalRacialBonusPoints;
    }

    // Throw any subRace-bonus into the racial bonus
    if (this.subRace) {
      Object.keys(this.subRace.attributeBonus).forEach(key => {
        if (this.race.attributeBonus[key]) {
          this.race.attributeBonus[key] += this.subRace.attributeBonus[key];
        } else {
          this.race.attributeBonus[key] = this.subRace.attributeBonus[key];
        }
      });
    }
  }

  /**
   * Calculate the remaining points available
   * Adjust the last used input if remaining points < 0
   */
  public updatePointCount(attr): void {
    this.remainingPoints = this.totalPoints;

    Object.keys(this.form.controls).forEach(key => {
      const value = this.form.get(key).value;
      this.remainingPoints -= PointBuyComponent._getPointCost(value);
    });

    if (this.remainingPoints < 0) {
      const field = this.form.get(attr);
      field.setValue(field.value - 1);
      this.updatePointCount(attr);
    }
  }

  public handleBonusSelection(attr): void {
    const pCount = Object.keys(this.form.controls)
      .filter(key => key.substr(0, 5) === 'bonus' && this.form.get(key).value)
      .length;
    this.remainingRacialBonusPoints = this.totalRacialBonusPoints - pCount;

    if (this.remainingRacialBonusPoints < 0) {
      const field = this.form.get('bonus_' + attr);
      field.setValue(false);
    }
  }

  public getTotal(attr: Attribute): number {
    if (this.race.attributeBonus[attr]) {
      return this.form.get(attr).value + this.race.attributeBonus[attr];
    } else if (this.form.get('bonus_' + attr)?.value) {
      return this.form.get(attr).value + 1;
    } else {
      return this.form.get(attr).value;
    }
  }

  public calculateRacialBonus(): void {
    if (!this.race.attributeBonus.pickable) {
      this.remainingRacialBonusPoints = 0;
    } else {
      this.remainingRacialBonusPoints = this.race.attributeBonus.pickable;
    }
  }

  public save(): void {
    if (this.remainingPoints !== 0 || (this.remainingRacialBonusPoints !== 0 && this.isRacialBonusAvailable)) {
      return;
    }

    this._dialogRef.close({
      str: this.getTotal(Attribute.STR),
      dex: this.getTotal(Attribute.DEX),
      con: this.getTotal(Attribute.CON),
      int: this.getTotal(Attribute.INT),
      wis: this.getTotal(Attribute.WIS),
      cha: this.getTotal(Attribute.CHA),
      optionalPicks: {
        str: this.form.get('bonus_str'),
        dex: this.form.get('bonus_dex'),
        con: this.form.get('bonus_con'),
        int: this.form.get('bonus_int'),
        wis: this.form.get('bonus_wis'),
        cha: this.form.get('bonus_cha'),
      }
    });

    this.pointBuyComplete.emit(true);
  }

}
