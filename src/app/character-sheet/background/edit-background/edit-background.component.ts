import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {CharacterBackground} from 'src/library/models/src/lib/src/backgrounds';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-edit-background',
  templateUrl: './edit-background.component.html',
  styleUrls: []
})
export class EditBackgroundComponent implements OnInit {

  public bgList: Array<CharacterBackground> = EnumHelper.getBackgroundList();
  public currentBg: CharacterBackground;

  constructor(public dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentBg = this.dialogRef.data.currentBackground;
  }

}
