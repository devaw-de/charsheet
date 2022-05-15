import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CharacterService, ToastService, ToastType} from '@app/services';
import {PlayerCharacterData} from '@app/models';
import {saveAs} from 'file-saver';
import {FileHelper, GlobalConstants} from '@app/helpers';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public character: PlayerCharacterData;

  @ViewChild('filePickerInput') filePickerInput: ElementRef<HTMLInputElement>;

  constructor(
    private _router: Router,
    private _characterService: CharacterService,
    private _toastService: ToastService
  ) {
    this.character = this._characterService.getCharacter();
  }

  ngOnInit(): void {
    this._loadCharacter();
  }

  public toBuilder(): void {
    this._router.navigate(['']);
  }

  public exportCharacter(): void {
    const fileExtension = '.json.txt';
    const fileName = this.character.name.toLowerCase().trim().replace(/\s/g, '_');

    try {
      const blob = new Blob([JSON.stringify(this.character)], {type: GlobalConstants.fileBlobParams});
      saveAs(blob, fileName + fileExtension);
    } catch (e) {
      this._toastService.show({
        type: ToastType.ERROR,
        content: 'Something went wrong. The file could not be saved.',
        timeOut: GlobalConstants.defaultToastDuration
      });
      return;
    }

    this._toastService.show({
      type: ToastType.SUCCESS,
      content: `Character saved as "${fileName}${fileExtension}" You should find it in your Download folder`,
      timeOut: GlobalConstants.defaultToastDuration
    });
  }

  public importCharacter(): void {
    this.filePickerInput.nativeElement.click();
  }

  public handleFileSelection(): void {
    const selectedFile = this.filePickerInput.nativeElement.files[0];

    try {
      this.character = FileHelper.handleFile(selectedFile);
      this._toastService.show({
        type: ToastType.SUCCESS,
        content: 'Character Sheet updated',
        timeOut: GlobalConstants.defaultToastDuration
      });
    } catch (e) {
      this._toastService.show({
        type: ToastType.ERROR,
        content: 'There was an error trying to handle that file. Please try again.',
        timeOut: GlobalConstants.defaultToastDuration
      });
    }

  }

  public saveCharacter(): void {
    localStorage.setItem('character', JSON.stringify(this._characterService.getCharacter()));
  }

  public isLocalDataAvailable(): boolean {
    return !!localStorage.getItem('character');
  }

  private _loadCharacter(): void {
    this._characterService.loadCharacter();
    this.character = this._characterService.getCharacter();
  }

  public clearLocalData(): void {
    localStorage.clear();
  }

  public debug(): void {
    console.dir(this._characterService.getCharacter());
  }

  public test(): void {
    const str = this._characterService.getCharacter().attributes.str;
    const dex = this._characterService.getCharacter().attributes.dex;
    const con = this._characterService.getCharacter().attributes.con;
    const int = this._characterService.getCharacter().attributes.int;
    const wis = this._characterService.getCharacter().attributes.wis;
    const cha = this._characterService.getCharacter().attributes.cha;

    console.warn('Attributes: ' + str + '/' + dex + '/' + con + '/' + int + '/' + wis + '/' + cha);
    console.warn('AppliedRacialstuff');
    console.warn(this._characterService.getCharacter().appliedRacialBonuses);
  }

}
