import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {CharacterClassName} from '@app/models';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  public classesList: Array<CharacterClassName> = EnumHelper.getClassesList();
  public currentClass: CharacterClassName;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentClass = this._dialogRef.data.currentClass;
  }

}
