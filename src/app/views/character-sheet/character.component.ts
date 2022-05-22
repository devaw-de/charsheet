import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AppMenuService, CharacterService, SettingsService, ToastService, ToastType} from '@app/services';
import {LocalStorageKey, PlayerCharacterData} from '@app/models';
import {saveAs} from 'file-saver';
import {FileHelper, GlobalConstants} from '@app/helpers';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, AfterViewInit {

  public character: PlayerCharacterData;

  @ViewChild('filePickerInput') filePickerInput: ElementRef<HTMLInputElement>;
  @ViewChild('menuTemplate') menuTemplate: TemplateRef<HTMLUListElement>;

  constructor(
    private _router: Router,
    private _characterService: CharacterService,
    private _toastService: ToastService,
    private _settingsService: SettingsService,
    private _menuService: AppMenuService
  ) {
    this.character = this._characterService.getCharacter();
  }

  ngOnInit(): void {
    this._loadCharacter();
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
    this._characterService.saveCharacterToStorage();
    this._settingsService.saveSettingsToStorage();
  }

  public isLocalDataAvailable(): boolean {
    return !!localStorage.getItem(LocalStorageKey.CHARACTER);
  }

  private _loadCharacter(): void {
    this._settingsService.readSettingsFromStorage();
    this._characterService.readCharacterFromStorage();
    this.character = this._characterService.getCharacter();
  }

  public clearLocalData(): void {
    localStorage.clear();
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
