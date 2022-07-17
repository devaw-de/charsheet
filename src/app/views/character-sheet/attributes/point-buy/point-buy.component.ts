import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {AbilityScoreImprovements, Attribute, NullAttributeSet, PointBuyDTO, RaceBonusSelectionDTO} from '@app/models';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {PointBuyHelper} from './point-buy.helper';
import {CharacterSheetBaseComponent} from '../../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';
import {CustomCheckboxComponent} from '../../../../components/custom-checkbox/custom-checkbox.component';
import {CustomNumberInputComponent} from '../../../../components/custom-number-input/custom-number-input.component';

@Component({
  selector: 'app-point-buy',
  templateUrl: './point-buy.component.html',
  styleUrls: ['./point-buy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointBuyComponent extends CharacterSheetBaseComponent implements OnInit {

  Attribute = Attribute;

  public readonly totalPoints = 27;
  public totalRacialBonusPoints: number;
  public attributesList: Array<Attribute> = EnumHelper.getAttributesList();
  public totalAsiPoints: number;
  public currentAttributes: PointBuyDTO = null;
  public selectedBonusAttributes: RaceBonusSelectionDTO;

  @ViewChildren('baseInput') private _baseInputFields: QueryList<CustomNumberInputComponent>;
  @ViewChildren('asiInput') private _asiInputFields: QueryList<CustomNumberInputComponent>;
  @ViewChildren(CustomCheckboxComponent) private _racialBonusCheckBoxes: QueryList<CustomCheckboxComponent>;

  public get remainingBasePoints(): number {
    return this._baseInputFields?.length
           ? this.totalPoints - PointBuyHelper.getInputValueCostSum(this._baseInputFields)
           : 0;
  }

  public get remainingAsiPoints(): number {
    return this._asiInputFields?.length
           ? this.totalAsiPoints - PointBuyHelper.getInputValueSum(this._asiInputFields)
           : 0;
  }

  public get remainingRacialBonusPoints(): number {
    return this._racialBonusCheckBoxes
           ? this.totalRacialBonusPoints - this._racialBonusCheckBoxes.toArray().filter(box => box.checked).length
           : 0;
  }

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogRef: DialogRef
  ) {
    super(_characterService, _changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.currentAttributes = {
      base: {...this._character.baseAttributes},
      racial: {...this._character.appliedRacialBonuses},
      asi: {...this._character.appliedAttributeIncreases} ?? {...NullAttributeSet}
    };
    this.selectedBonusAttributes = {
      str: false,
      dex: false,
      con: false,
      int: false,
      wis: false,
      cha: false
    };
    this.totalAsiPoints = AbilityScoreImprovements(this.characterLevel);
    this.totalRacialBonusPoints =
      (this.characterSubRaceDetails?.attributeBonus?.pickable || 0)
      + (this.characterRaceDetails.attributeBonus?.pickable || 0);
    setTimeout(() => {
      this._changeDetectorRef.detectChanges();
    });
  }

  public handleBaseAttributeChange(value: number, attr: Attribute): void {
    this.currentAttributes.base[this.getAttributeKey(attr)] = value;
  }

  public handleAsiChange(value: number, attr: Attribute): void {
    this.currentAttributes.asi[this.getAttributeKey(attr)] = value;
  }

  public getBaseAttributeMaxValue(attr: Attribute): number {
    return PointBuyHelper.getDistributedMaxValue(
      this.currentAttributes.base[this.getAttributeKey(attr)],
      this.remainingBasePoints,
      15
    );
  }

  public getAsiMaxValue(currentValue: number): number {
    return PointBuyHelper.getDistributedMaxValue(
      currentValue,
      this.remainingAsiPoints,
      this.totalAsiPoints
    );
  }

  public getRacialBonus(attr: Attribute): number {
    const racialBonus = this.characterRaceDetails?.attributeBonus[this.getAttributeKey(attr)] || 0;
    const subRaceBonus = this.characterSubRaceDetails?.attributeBonus[this.getAttributeKey(attr)] || 0;
    return racialBonus + subRaceBonus;
  }

  public handleBonusSelection(attr: Attribute, event: boolean): void {
    this.selectedBonusAttributes[this.getAttributeKey(attr)] = event;
  }

  public getTotal(attr: Attribute): number {
    const attributeKey = this.getAttributeKey(attr);

    return this.currentAttributes.base[attributeKey]
      + (this.currentAttributes.asi[attributeKey] ?? 0)
      + (this.currentAttributes.racial[attributeKey] ?? 0)
      + (this.selectedBonusAttributes[attributeKey] ?? 0);
  }

  public getModifier(attr: Attribute): string {
    return AbilityHelper.getAbilityModifierAsString(
      this.getTotal(attr)
    );
  }

  public getAttributeKey(attr: Attribute): string {
    return attr.toString().toLowerCase().substring(0, 3);
  }

  public save(): void {
    console.log(this.currentAttributes);
    console.log(this.getTotal(Attribute.WIS));
    if (
      this.remainingBasePoints !== 0
      || this.remainingRacialBonusPoints !== 0
      || this.remainingAsiPoints !== 0
    ) {
      return;
    }

    this._characterService.setAttributes(this.currentAttributes);
  }

}
