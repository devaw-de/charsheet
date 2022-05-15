import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {Utils} from 'src/app/lib/utils';
import {CharacterBackground} from 'src/app/model/backgrounds';


@Component({
  selector: 'app-edit-background',
  templateUrl: './edit-background.component.html',
  styleUrls: []
})
export class EditBackgroundComponent implements OnInit {

  public bgList: Array<CharacterBackground> = Utils.getBackgroundList();
  public currentBg: CharacterBackground;

  constructor(public dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentBg = this.dialogRef.data.currentBackground;
  }

}
