import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-edit-string',
  templateUrl: './edit-string.component.html',
  styleUrls: ['./edit-string.component.scss']
})
export class EditStringComponent implements OnInit, AfterViewInit {

  public title: string;
  public value: string;
  public minLength: number;
  public maxLength: number;
  public isInputInvalid: boolean = false;

  @ViewChild('inputElement') inputElement;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.title = this._dialogRef.data.title;
    this.value = this._dialogRef.data.currentValue;
    this.minLength = this._dialogRef.data.minLength;
    this.maxLength = this._dialogRef.data.maxLength;
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }

  public updateValue(): void {
    this.value = this.inputElement.nativeElement.value.trim();
    this.isInputInvalid = !this.value || this.value.length > this.maxLength || this.value.length < this.minLength;
  }

  public saveValue(): void {
    this._dialogRef.close(this.value);
  }

}
