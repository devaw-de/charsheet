import {Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {LanguagePickerComponent} from '../views/builder/language-picker/language-picker.component';
import {Language} from '@app/models';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: []
})
export class DebugComponent {

  constructor(
    private _dialog: DialogService
  ) {}

  public openShit(): void {
    this._dialog.open( LanguagePickerComponent, {
      data: {
        maxLanguages: 3,
        currentLanguages: [Language.COMMON]
      }
    });
  }

}
