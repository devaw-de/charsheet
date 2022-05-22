import {Component, OnDestroy, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {GlobalConstants} from '@app/helpers';
import {AppMenuService} from '@app/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {

  public githubUrl = GlobalConstants.githubUrl;
  public showMenu = false;
  public additionalMenuItems: TemplateRef<HTMLUListElement>;

  private _routingEventSubscription: Subscription;
  private _menuItemsSubscription: Subscription;

  constructor(
    private _router: Router,
    private _menuService: AppMenuService
  ) {
    this._routingEventSubscription = this._router.events.subscribe(
      (routerEvent) => this.showMenu = false
    );
    this._menuItemsSubscription = this._menuService.componentDefinedMenuItems$.subscribe(
      (template) => {
        this.additionalMenuItems = template;
      }
    );
  }

  ngOnDestroy(): void {
    this._routingEventSubscription.unsubscribe();
    this._menuItemsSubscription.unsubscribe();
  }

  public toggleMenu(state?: boolean): void {
    if (state !== undefined) {
      this.showMenu = state;
    } else {
      this.showMenu = !this.showMenu;
    }
  }

  public navigate(target: string): void {
    this.toggleMenu(false);
    this._router.navigate([target]);
  }

}
