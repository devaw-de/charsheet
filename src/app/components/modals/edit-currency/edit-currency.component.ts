import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {Currency} from '@app/models';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss']
})
export class EditCurrencyComponent implements AfterViewInit {

  @ViewChild('platinum', {static: true}) platinum: ElementRef<HTMLInputElement>;
  @ViewChild('gold', {static: true}) gold: ElementRef<HTMLInputElement>;
  @ViewChild('silver', {static: true}) silver: ElementRef<HTMLInputElement>;
  @ViewChild('copper', {static: true}) copper: ElementRef<HTMLInputElement>;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngAfterViewInit(): void {
    this.platinum.nativeElement.value = this._dialogRef.data.cash.platinum ?? 0;
    this.gold.nativeElement.value = this._dialogRef.data.cash.gold ??  0;
    this.silver.nativeElement.value = this._dialogRef.data.cash.silver ?? 0;
    this.copper.nativeElement.value = this._dialogRef.data.cash.copper ?? 0;
  }

  public save(): void {
    this._dialogRef.close({
      platinum: parseInt(this.platinum.nativeElement.value, 10),
      gold: parseInt(this.gold.nativeElement.value, 10),
      silver: parseInt(this.silver.nativeElement.value, 10),
      copper: parseInt(this.copper.nativeElement.value, 10)
    } as Currency);
  }

}
