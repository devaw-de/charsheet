import {Component, OnDestroy} from '@angular/core';
import {ToastConfig, ToastService, ToastType} from '@app/services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-toast-renderer',
  templateUrl: './toast-renderer.component.html',
  styleUrls: ['./toast-renderer.component.scss']
})
export class ToastRendererComponent implements OnDestroy {

  ToastType = ToastType;

  private _toastSubscription: Subscription;
  public toasts: Array<ToastConfig>;

  constructor(
    private _toastService: ToastService
  ) {
    this._toastSubscription = this._toastService.currentToasts$.subscribe(
      toasts => this.toasts = toasts
    );
  }

  ngOnDestroy(): void {
    this._toastSubscription?.unsubscribe();
  }

  closeToast(toast: ToastConfig): void {
    this._toastService.hideById(toast.id);
  }

}
