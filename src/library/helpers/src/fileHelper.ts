import {PlayerCharacterData} from '@app/models';
import {GlobalConstants} from './globalConstants';
import {JsonHelper} from './jsonHelper';

export class FileHandlerError extends Error {
  constructor(errorMessage: string = 'Unknown FileHandler Error') {
    super(errorMessage);
    super.name = 'FileHandlerError';
  }
}

export class FileHelper {

  public static maxFileSize = 10 * 1024;
  public static expectedMinFileSize = 512;

  public static checkFile(file: File): boolean {
    if (!file) {
      throw new FileHandlerError('no file supplied to FileHelper');
    }
    if (file.type !== GlobalConstants.fileMimeType) {
      throw new FileHandlerError('wrong file type');
    }
    if (file.size < FileHelper.expectedMinFileSize) {
      throw new FileHandlerError('file could not be read');
    }
    if (file.size > FileHelper.maxFileSize) {
      throw new FileHandlerError('file too large');
    }

    return true;
  }

  public static handleFile(file: File): PlayerCharacterData {
    if (!this.checkFile(file)) { return null; }

    try {
      const reader = new FileReader();
      reader.onload = ((f) => (e) => {
        return FileHelper.parseFileContent(e.target.result);
      })(file);
      reader.readAsText(file, GlobalConstants.fileEncoding);


    } catch (e) {
      throw new FileHandlerError();
    }

    return null;
  }

  public static parseFileContent(file: string): PlayerCharacterData {
    console.log(file);
    return JsonHelper.parseCharacter(file);
  }

}
