import {Component, Input} from '@angular/core';
import {CharacterService} from 'src/app/lib/character.service';
import {PlayerCharacterData} from '../../model/character';
import {EditAlignmentComponent} from './edit-alignment/edit-alignment.component';
import {EditBackgroundComponent} from './edit-background/edit-background.component';
import {EditClassComponent} from './edit-class/edit-class.component';
import {EditRaceComponent} from './edit-race/edit-race.component';
import {SelectSubRaceComponent} from './select-subrace/select-subrace.component';
import {EditStringComponent} from 'src/app/elements/generic-modals/edit-string/edit-string.component';
import {DialogService} from '@ngneat/dialog';
import {CharacterClassName} from 'src/app/model/characterClasses';
import {CharacterBackground} from 'src/app/model/backgrounds';
import {CharacterRace, CharacterSubRaceName} from 'src/app/model/characterRaces';
import {Utils} from 'src/app/lib/utils';
import {SetXpComponent} from './set-xp/set-xp.component';
import {Alignment} from '../../model/alignments';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  @Input() character: PlayerCharacterData;

  constructor(
    private _service: CharacterService,
    private _dialogService: DialogService
    ) {}

  public editAlignment(): void {
    const modal = this._dialogService.open(EditAlignmentComponent, {
      data: {
        currentBackground: this.character.alignment
    }});
    const modalSubscription = modal.afterClosed$.subscribe((alignment: Alignment) => {
      if (alignment) { this._service.setAlignment(alignment); }
      modalSubscription.unsubscribe();
    });
  }

  public editExperiencePoints(): void {
    const modal = this._dialogService.open(SetXpComponent, {
      data: {
        currentValue: this.character.xp,
        minValue: 0,
        maxValue: 355000
    }});
    const modalSubscription = modal.afterClosed$.subscribe((value: number) => {
      this._service.setXp(value);
      modalSubscription.unsubscribe();
    });
  }

  public editPlayerName(): void {
    const modal = this._dialogService.open(EditStringComponent, {
      size: 'sm',
      data: {
        title: 'Player Name',
        currentValue: this.character.playerName,
        minLength: 1,
        maxLength: 200,
    }});
    const modalSubscription = modal.afterClosed$.subscribe(value => {
      if (value) { this._service.setPlayerName(value); }
      modalSubscription.unsubscribe();
    });
  }

  public editClass(): void {
    const modal = this._dialogService.open(EditClassComponent, {
      data: {
        currentClass : this.character.className
    }});
    const modalSubscription = modal.afterClosed$.subscribe((characterClass: CharacterClassName) => {
      if (characterClass) { this._service.setClass(characterClass); }
      modalSubscription.unsubscribe();
    });
  }

  public editBackground(): void {
    const modal = this._dialogService.open(EditBackgroundComponent, {
      data: {
        currentBackground: this.character.background
    }});
    const modalSubscription = modal.afterClosed$.subscribe((background: CharacterBackground) => {
      if (background) { this._service.setBackground(background); }
      modalSubscription.unsubscribe();
    });
  }

  public editRace(): void {
    const raceModal = this._dialogService.open(EditRaceComponent, {
      data: {
        currentRace: this.character.race
      }
    });
    const raceModalSubscription = raceModal.afterClosed$.subscribe((race: CharacterRace) => {
      if (race) {
        this._service.setRace(race);

        if (Utils.subRaceSelectionRequired(race)) {
          const subRaceModal = this._dialogService.open(SelectSubRaceComponent, {
            data: {
              race: race
            },
            enableClose: false,
            closeButton: false
          });
          const subRaceModalSubscription = subRaceModal.afterClosed$.subscribe((subRace: CharacterSubRaceName) => {
            this._service.setSubRace(subRace);
            subRaceModalSubscription.unsubscribe();
          });
        }
      }

      raceModalSubscription.unsubscribe();
    });

  }

}
