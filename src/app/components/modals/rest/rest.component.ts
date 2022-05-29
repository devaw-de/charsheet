import {Component} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {RestStep, RestType} from '@app/models';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: []
})
export class RestComponent {

  RestStep = RestStep;
  RestType = RestType;

  public step: RestStep = RestStep.SELECTION;

  private _restType: RestType;

  constructor(
    private _dialogRef: DialogRef,
    private _characterService: CharacterService
  ) {}

  public selectRestType(restType: RestType): void {
    this._restType = restType;
    this._characterService.applyRestEffects(this._restType);
  }

}
