import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CryptoHelper} from '@app/helpers';

export enum ToastType {
  NOTIFICATION = 'NOTIFICATION',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export class ToastConfig {
  id?: string;
  type: ToastType;
  content: string;
  timeOut?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _currentToasts = new BehaviorSubject<Array<ToastConfig>>([]);
  public readonly currentToasts$ = this._currentToasts.asObservable();

  public show(toast: ToastConfig): void {
    toast = {
      ...toast,
      id: CryptoHelper.createFakeUuid()
    };
    this._currentToasts.next([
      ... this._currentToasts.value,
      toast
    ]);

    if (toast.timeOut) {
      window.setTimeout(() => {
        this.hideById(toast.id);
      }, toast.timeOut);
    }
  }

  public hideById(id: string): void {
    this._currentToasts.next(
      this._currentToasts.value.filter(toast => toast.id !== id)
    );
  }

}
