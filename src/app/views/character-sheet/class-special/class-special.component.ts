import {Component} from '@angular/core';
import {CharacterClassName} from '@app/models';
import {AbilityHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';
import {SpellBookComponent} from '../../../components/modals/spell-book/spell-book.component';
import {DialogService} from '@ngneat/dialog';

@Component({
  selector: 'app-class-special',
  templateUrl: './class-special.component.html',
  styleUrls: ['./class-special.component.scss']
})
export class ClassSpecialComponent extends CharacterSheetBaseComponent {

  CharacterClassName = CharacterClassName;

  constructor(
    protected _characterService: CharacterService,
    private _dialogService: DialogService
  ) {
    super(_characterService);
  }

  public getBarbarianRagesPerDay(): number {
    if (this._character.level < 3 ) { return 2; }
    else if (this._character.level < 6) { return 3; }
    else if (this._character.level < 12) { return 4; }
    else if (this._character.level < 17) { return 5; }
    else { return 6; }
  }

  public getBardicInspiration(): {die: string, amount: number} {
    let inspirationDie = 'd6';
    if (this._character.level > 14) { inspirationDie = 'd12'; }
    else if (this._character.level > 9) { inspirationDie = 'd10'; }
    else if (this._character.level > 4) { inspirationDie = 'd8'; }

    return {
      die: inspirationDie,
      amount: Math.min(1, AbilityHelper.getAbilityModifier(this.characterAttributes.cha))
    };
  }

  public getClericalDivinity(): {channelDivinityPerRest: number, destroyUndeadCr: string} {
    let channelDivinityPerRest = 0;
    if (this._character.level > 17) { channelDivinityPerRest = 3; }
    else if (this._character.level > 5) { channelDivinityPerRest = 2; }
    else if (this._character.level > 1) { channelDivinityPerRest = 1; }

    let destroyUndeadCr = '';
    if (this._character.level > 16) { destroyUndeadCr = '4'; }
    else if (this._character.level > 13) { destroyUndeadCr = '3'; }
    else if (this._character.level > 10) { destroyUndeadCr = '2'; }
    else if (this._character.level > 7) { destroyUndeadCr = '1'; }
    else if (this._character.level > 4) { destroyUndeadCr = '1/2'; }

    return {
      channelDivinityPerRest,
      destroyUndeadCr
    };
  }

  public getDruidicWildshape(): {wildshapeCr: string, wildshapeLimitations: string} {
    let wildshapeCr = '';
    let wildshapeLimitations = '';
    if (this._character.level > 7) { wildshapeCr = '1'; }
    else if (this._character.level > 3) {
      wildshapeCr = '1/2';
      wildshapeLimitations = 'No flying speed';
    }
    else if (this._character.level > 1) {
      wildshapeCr = '1/4';
      wildshapeLimitations = 'No flying or swimming speed';
    }

    return {
      wildshapeCr,
      wildshapeLimitations
    };
  }

  public getMonkKiPoints(): number {
    return this._character.level > 2 ? this._character.level : 0;
  }

  public getPaladinLayOnHands(): number {
    return this._character.level * 5;
  }

  public getPaladinDivineSense(): number {
    return 1 + AbilityHelper.getAbilityModifier(this.characterAttributes.cha);
  }

  public getRogueishExpertise(): string {
    return 'Todo: handle expertise';
  }

  public getRoguishSneakAttackDice(): number {
    return Math.ceil(this._character.level / 2);
  }

  public getSorceryPoints(): number {
    return this._character.level > 1 ? this._character.level : 0;
  }

  public openSpellBook(): void {
    this._dialogService.open(SpellBookComponent);
  }

}
