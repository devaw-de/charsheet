import {Injectable, OnDestroy, TemplateRef} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService implements OnDestroy{

  private _routerEventSubscription: Subscription;
  private _componentDefinedMenuItems = new BehaviorSubject<TemplateRef<HTMLUListElement>>(null);
  public readonly componentDefinedMenuItems$ = this._componentDefinedMenuItems.asObservable();

  public set componentDefinedMenuItems(template: TemplateRef<HTMLUListElement>) {
    this._componentDefinedMenuItems.next(template);
  }

  constructor(
    private _router: Router
  ) {
    this._routerEventSubscription = this._router.events.subscribe(
      () => this._componentDefinedMenuItems.next(null)
    );
  }

  ngOnDestroy(): void {
    this._routerEventSubscription.unsubscribe();
  }

}
