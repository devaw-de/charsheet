import {Component} from '@angular/core';
import {HitPoints} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {DialogService} from '@ngneat/dialog';
import {DamageComponent} from '../../../components/modals/damage/damage.component';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.scss']
})
export class HitpointsComponent extends CharacterSheetBaseComponent {

  public get hitpoints(): HitPoints {
    return this._character.hitPoints;
  }

  constructor(
    protected _characterService: CharacterService,
    private _dialogService: DialogService
  ) {
    super(_characterService);
  }

  public openDamageModal(): void {
    const modal = this._dialogService.open(DamageComponent);
    const modalSubscription = modal.ref.instance.hitPointChange$.subscribe((value: number) => {
      this._characterService.takeDamage(0 - value);
    });
    const modalClosedSubscription = modal.afterClosed$.subscribe(() => {
      modalSubscription.unsubscribe();
      modalClosedSubscription.unsubscribe();
    });
  }

}
