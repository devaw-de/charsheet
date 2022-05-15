import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {Currency} from 'src/library/models/src/lib/src/equipment';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss']
})
export class EditCurrencyComponent implements AfterViewInit {

  @ViewChild('platinum', {static: true}) platinum: ElementRef;
  @ViewChild('gold', {static: true}) gold: ElementRef;
  @ViewChild('silver', {static: true}) silver: ElementRef;
  @ViewChild('copper', {static: true}) copper: ElementRef;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngAfterViewInit(): void {
    this.platinum.nativeElement.value = this._dialogRef.data.cash.platinum ? this._dialogRef.data.cash.platinum  : 0;
    this.gold.nativeElement.value = this._dialogRef.data.cash.gold ? this._dialogRef.data.cash.gold : 0;
    this.silver.nativeElement.value = this._dialogRef.data.cash.silver ? this._dialogRef.data.cash.silver : 0;
    this.copper.nativeElement.value = this._dialogRef.data.cash.copper ? this._dialogRef.data.cash.copper : 0;
  }

  public save(): void {
    this._dialogRef.close({
      platinum: this.platinum.nativeElement.value,
      gold: this.gold.nativeElement.value,
      silver: this.silver.nativeElement.value,
      copper: this.copper.nativeElement.value
    } as Currency);
  }

}
