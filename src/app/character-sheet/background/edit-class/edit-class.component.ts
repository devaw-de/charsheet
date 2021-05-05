import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Utils } from 'src/app/lib/utils';
import { CharacterClassName } from 'src/app/model/characterClasses';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  public classesList: Array<CharacterClassName> = Utils.getClassesList();
  public currentClass: CharacterClassName;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentClass = this._dialogRef.data.currentClass;
  }

}
