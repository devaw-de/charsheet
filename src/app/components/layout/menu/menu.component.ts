import {Component, OnDestroy, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {EnumHelper, GlobalConstants} from '@app/helpers';
import {AppMenuService} from '@app/services';
import {ButtonStyle, Dice} from '@app/models';
import {DieRollComponent} from '../../modals/die-roll/die-roll.component';
import {DialogService} from '@ngneat/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {

  ButtonStyle = ButtonStyle;

  public readonly dice = EnumHelper.enumToArray(Dice);
  public githubUrl = GlobalConstants.githubUrl;
  public showMenu = false;
  public additionalMenuItems: TemplateRef<HTMLUListElement>;

  private _routingEventSubscription: Subscription;
  private _menuItemsSubscription: Subscription;

  constructor(
    private _router: Router,
    private _menuService: AppMenuService,
    private _dialogService: DialogService
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

  public async navigate(target: string): Promise<void> {
    this.toggleMenu(false);
    await this._router.navigate([target]);
  }

  public rollDie(die: Dice): void {
    this._dialogService.open( DieRollComponent, {
      data: {
        dieType: die
      }
    });
  }

}
