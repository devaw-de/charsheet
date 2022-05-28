import {Component} from '@angular/core';
import {CharacterSheetBaseComponent} from '../../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-class-icon',
  templateUrl: './class-icon.component.html',
  styleUrls: ['./class-icon.component.scss']
})
export class ClassIconComponent extends CharacterSheetBaseComponent{

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

}
