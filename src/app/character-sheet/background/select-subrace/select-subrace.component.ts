import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { CharacterSubraceDetails, CharacterSubRaceName, CharacterSubracesList } from 'src/app/model/characterRaces';

@Component({
  selector: 'app-select-subrace',
  templateUrl: './select-subrace.component.html',
  styleUrls: ['./select-subrace.component.scss']
})
export class SelectSubraceComponent implements OnInit {

  public subraceList: Array<CharacterSubraceDetails>;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.subraceList = CharacterSubracesList.filter(subrace => subrace.extendsRace === this._dialogRef.data.race);
  }

}
