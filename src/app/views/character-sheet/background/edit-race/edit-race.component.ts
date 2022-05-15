import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {CharacterRace} from 'src/library/models/src/lib/src/characterRaces';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.component.html',
  styleUrls: []
})
export class EditRaceComponent implements OnInit {

  public racesList: Array<CharacterRace> = EnumHelper.getRacesList();
  public currentRace: CharacterRace;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.currentRace = this._dialogRef.data.currentRace;
  }

}
