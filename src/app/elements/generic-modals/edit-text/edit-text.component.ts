import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: []
})
export class EditTextComponent implements OnInit {

  public title: string;
  public value: string;
  public minLength: number;
  public maxLength: number;
  public isInputInvalid = false;

  @ViewChild('inputElement') inputElement;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.title = this._dialogRef.data.title;
    this.value = this._dialogRef.data.currentValue;
    this.minLength = this._dialogRef.data.minLength;
    this.maxLength = this._dialogRef.data.maxLength;
  }

  public updateValue(): void {
    this.value = this.inputElement.nativeElement.innerText.trim();
    this.isInputInvalid = !this.value || this.value.length > this.maxLength || this.value.length < this.minLength;
  }

  public saveValue(): void {
    this._dialogRef.close(this.value);
  }

}
