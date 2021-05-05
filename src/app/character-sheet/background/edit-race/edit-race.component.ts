import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Utils } from 'src/app/lib/utils';
import { CharacterRace } from 'src/app/model/characterRaces';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.component.html',
  styleUrls: []
})
export class EditRaceComponent implements OnInit {

  public racesList: Array<CharacterRace> = Utils.getRacesList();
  public currentRace: CharacterRace;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentRace = this._dialogRef.data.currentRace;
  }

}
