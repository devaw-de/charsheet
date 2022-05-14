import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { CharacterSubRaceDetails, CharacterSubRacesList } from 'src/app/model/characterRaces';

@Component({
  selector: 'app-select-sub-race',
  templateUrl: './select-sub-race.component.html',
  styleUrls: ['./select-sub-race.component.scss']
})
export class SelectSubRaceComponent implements OnInit {

  public subRaceList: Array<CharacterSubRaceDetails>;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.subRaceList = CharacterSubRacesList.filter(sub => sub.extendsRace === this._dialogRef.data.race);
  }

}
