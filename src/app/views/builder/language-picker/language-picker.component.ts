import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {Language} from '@app/models';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  public availableLanguages: Array<Language> = EnumHelper.getLanguagesList();
  public characterOwnedLanguages: Array<Language>;
  public selectedLanguages: Array<Language> = [];
  public totalPicks = 0;
  public remainingPicks = 0;

  constructor(private _dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.characterOwnedLanguages = this._dialogRef.data.currentLanguages;
    this.totalPicks = this._dialogRef.data.maxLanguages;
    this.remainingPicks = this.totalPicks;
  }

  public toggleLanguageSelection(lang: Language): void {
    if (this.selectedLanguages.includes(lang)) {
      this.selectedLanguages = this.selectedLanguages.filter(lg => lg !== lang);
      this.remainingPicks++;
    } else {
      this.selectedLanguages.push(lang);
      this.remainingPicks--;
    }
  }

}
