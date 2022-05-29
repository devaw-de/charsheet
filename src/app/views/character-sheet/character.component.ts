import {AfterViewInit, Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AppMenuService, CharacterService, SettingsService, ToastService, ToastType} from '@app/services';
import {LocalStorageKey, PlayerCharacterData} from '@app/models';
import {saveAs} from 'file-saver';
import {FileHelper, GlobalConstants} from '@app/helpers';
import {CharacterSheetBaseComponent} from './_base/character-sheet-base.component';
import {JsonHelper} from '../../../library/helpers/src/jsonHelper';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends CharacterSheetBaseComponent implements AfterViewInit {

  public character: PlayerCharacterData;

  @ViewChild('filePickerInput') filePickerInput: ElementRef<HTMLInputElement>;
  @ViewChild('menuTemplate') menuTemplate: TemplateRef<HTMLUListElement>;

  constructor(
    protected _characterService: CharacterService,
    private _router: Router,
    private _toastService: ToastService,
    private _settingsService: SettingsService,
    private _menuService: AppMenuService
  ) {
    super(_characterService);
  }

  ngAfterViewInit(): void {
    this._menuService.componentDefinedMenuItems = this.menuTemplate;
  }

  public async toBuilder(): Promise<void> {
    await this._router.navigate(['']);
  }

  public exportCharacter(): void {
    const fileExtension = '.json.txt';
    const fileName = this.character.name.toLowerCase().trim().replace(/\s/g, '_');

    try {
      const blob = new Blob([JsonHelper.stringifyCharacter(this.character)], {type: GlobalConstants.fileBlobParams});
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
    this._characterService.saveCharacterToStorage();
    this._settingsService.saveSettingsToStorage();
  }

  public isLocalDataAvailable(): boolean {
    return !!localStorage.getItem(LocalStorageKey.CHARACTER);
  }

  public clearLocalData(): void {
    localStorage.clear();
  }

}
