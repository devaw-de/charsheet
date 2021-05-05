import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-edit-number',
  templateUrl: './edit-number.component.html',
  styleUrls: ['./edit-number.component.scss']
})
export class EditNumberComponent implements OnInit, AfterViewInit {

  public value: number;
  public maxValue: number;
  public minValue: number;
  public title: string;
  public additionalComponent: any;

  @ViewChild('numberInput') numberInput;

  constructor(private _dialogRef: DialogRef) {}

  ngOnInit(): void {
    this.value = this._dialogRef.data.currentValue;
    this.maxValue = this._dialogRef.data.maxValue;
    this.minValue = this._dialogRef.data.minValue;
    this.title = this._dialogRef.data.title;
    this.additionalComponent = this._dialogRef.data.additionalComponent;
  }

  ngAfterViewInit(): void {
    this.numberInput.nativeElement.focus();
  }

  public updateValue(): void {
    this.value = this.numberInput.nativeElement.value;
  }

  public saveValue(): void {
    this._dialogRef.close(this.value);
  }

}
