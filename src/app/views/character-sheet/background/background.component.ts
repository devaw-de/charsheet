import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {EditAlignmentComponent} from './edit-alignment/edit-alignment.component';
import {EditBackgroundComponent} from './edit-background/edit-background.component';
import {EditClassComponent} from './edit-class/edit-class.component';
import {EditRaceComponent} from './edit-race/edit-race.component';
import {SelectSubRaceComponent} from './select-subrace/select-subrace.component';
import {EditStringComponent} from 'src/app/components/modals/generic-modals/edit-string/edit-string.component';
import {ClassHelper} from '@app/helpers';
import {SetXpComponent} from './set-xp/set-xp.component';
import {Alignment, CharacterBackground, CharacterClassName, CharacterRace, CharacterSubRaceName} from '@app/models';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends CharacterSheetBaseComponent{

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
    ) {
    super(_characterService, _changeDetectorRef);
  }

  public editAlignment(): void {
    const modal = this._dialogService.open(EditAlignmentComponent, {
      data: {
        currentBackground: this._character.alignment
    }});
    const modalSubscription = modal.afterClosed$.subscribe((alignment: Alignment) => {
      if (alignment) { this._characterService.setAlignment(alignment); }
      modalSubscription.unsubscribe();
    });
  }

  public editExperiencePoints(): void {
    const modal = this._dialogService.open(SetXpComponent, {
      data: {
        currentValue: this._character.xp,
        minValue: 0,
        maxValue: 355000
    }});
    const modalSubscription = modal.afterClosed$.subscribe((value: number) => {
      this._characterService.setXp(value);
      modalSubscription.unsubscribe();
    });
  }

  public editPlayerName(): void {
    const modal = this._dialogService.open(EditStringComponent, {
      size: 'sm',
      data: {
        title: 'Player Name',
        currentValue: this._character.playerName,
        minLength: 1,
        maxLength: 200,
    }});
    const modalSubscription = modal.afterClosed$.subscribe(value => {
      if (value) { this._characterService.setPlayerName(value); }
      modalSubscription.unsubscribe();
    });
  }

  public editClass(): void {
    const modal = this._dialogService.open(EditClassComponent, {
      data: {
        currentClass : this._character.className
    }});
    const modalSubscription = modal.afterClosed$.subscribe((characterClass: CharacterClassName) => {
      if (characterClass) { this._characterService.setClass(characterClass); }
      modalSubscription.unsubscribe();
    });
  }

  public editBackground(): void {
    const modal = this._dialogService.open(EditBackgroundComponent, {
      data: {
        currentBackground: this._character.background
    }});
    const modalSubscription = modal.afterClosed$.subscribe((background: CharacterBackground) => {
      if (background) { this._characterService.setBackground(background); }
      modalSubscription.unsubscribe();
    });
  }

  public editRace(): void {
    const raceModal = this._dialogService.open(EditRaceComponent, {
      data: {
        currentRace: this._character.race
      }
    });
    const raceModalSubscription = raceModal.afterClosed$.subscribe((race: CharacterRace) => {
      if (race) {
        this._characterService.setRace(race);

        if (ClassHelper.subRaceSelectionRequired(race)) {
          const subRaceModal = this._dialogService.open(SelectSubRaceComponent, {
            data: {
              race: race
            },
            enableClose: false,
            closeButton: false
          });
          const subRaceModalSubscription = subRaceModal.afterClosed$.subscribe((subRace: CharacterSubRaceName) => {
            this._characterService.setSubRace(subRace);
            subRaceModalSubscription.unsubscribe();
          });
        }
      }

      raceModalSubscription.unsubscribe();
    });

  }

}
