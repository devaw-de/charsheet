import {Component, Input} from '@angular/core';
import {CharacterClassName, PlayerCharacterData} from '@app/models';
import {AbilityHelper} from '@app/helpers';

@Component({
  selector: 'app-class-special',
  templateUrl: './class-special.component.html',
  styleUrls: ['./class-special.component.scss']
})
export class ClassSpecialComponent {

  CharacterClassName = CharacterClassName;

  @Input() character: PlayerCharacterData;

  constructor() { }

  public getBarbarianRagesPerDay(): number {
    if (this.character.level < 3 ) { return 2; }
    else if (this.character.level < 6) { return 3; }
    else if (this.character.level < 12) { return 4; }
    else if (this.character.level < 17) { return 5; }
    else { return 6; }
  }

  public getBardicInspiration(): {die: string, amount: number} {
    let inspirationDie = 'd6';
    if (this.character.level > 14) { inspirationDie = 'd12'; }
    else if (this.character.level > 9) { inspirationDie = 'd10'; }
    else if (this.character.level > 4) { inspirationDie = 'd8'; }

    return {
      die: inspirationDie,
      amount: Math.min(1, AbilityHelper.getAbilityModifier(this.character.attributes.cha))
    };
  }

  public getClericalDivinity(): {channelDivinityPerRest: number, destroyUndeadCr: string} {
    let channelDivinityPerRest = 0;
    if (this.character.level > 17) { channelDivinityPerRest = 3; }
    else if (this.character.level > 5) { channelDivinityPerRest = 2; }
    else if (this.character.level > 1) { channelDivinityPerRest = 1; }

    let destroyUndeadCr = '';
    if (this.character.level > 16) { destroyUndeadCr = '4'; }
    else if (this.character.level > 13) { destroyUndeadCr = '3'; }
    else if (this.character.level > 10) { destroyUndeadCr = '2'; }
    else if (this.character.level > 7) { destroyUndeadCr = '1'; }
    else if (this.character.level > 4) { destroyUndeadCr = '1/2'; }

    return {
      channelDivinityPerRest,
      destroyUndeadCr
    };
  }

  public getDruidicWildshape(): {wildshapeCr: string, wildshapeLimitations: string} {
    let wildshapeCr = '';
    let wildshapeLimitations = '';
    if (this.character.level > 7) { wildshapeCr = '1'; }
    else if (this.character.level > 3) {
      wildshapeCr = '1/2';
      wildshapeLimitations = 'No flying speed';
    }
    else if (this.character.level > 1) {
      wildshapeCr = '1/4';
      wildshapeLimitations = 'No flying or swimming speed';
    }

    return {
      wildshapeCr,
      wildshapeLimitations
    };
  }

  public getFighterFightingStyle(): string {
    return 'todo: pick a fighting style';
  }

  public getMonkKiPoints(): number {
    return this.character.level > 2 ? this.character.level : 0;
  }

  public getPaladinLayOnHands(): number {
    return this.character.level * 5;
  }

  public getPaladinDivineSense(): number {
    return 1 + AbilityHelper.getAbilityModifier(this.character.attributes.cha);
  }

  public getRogueishExpertise(): string {
    return 'Todo: handle expertise';
  }

  public getRoguishSneakAttackDice(): number {
    return Math.ceil(this.character.level / 2);
  }

  public getSorceryPoints(): number {
    return this.character.level > 1 ? this.character.level : 0;
  }

  public getRangerSpellDc(): number {
    return 8 + this.character.proficiencies.proficiencyBonus + AbilityHelper.getAbilityModifier(this.character.attributes.wis);
  }

  public getWarlockSpellDc(): number {
    return 8 + this.character.proficiencies.proficiencyBonus + AbilityHelper.getAbilityModifier(this.character.attributes.cha);
  }

  public getWizardSpellDc(): number {
    return 8 + this.character.proficiencies.proficiencyBonus + AbilityHelper.getAbilityModifier(this.character.attributes.int);
  }

  public getWizardSpellSlots(): Array<number> {
    switch (this.character.level) {
      case 1:
        return [2];
      case 2:
        return [3];
      case 3:
        return [4, 2];
      case 4:
        return [4, 3];
      case 5:
        return [4, 3, 2];
      case 6:
        return [4, 3, 3];
      case 7:
        return [4, 3, 3, 1];
      case 8:
        return [4, 3, 3, 2];
      case 9:
        return [4, 3, 3, 3, 1];
      case 10:
        return [4, 3, 3, 3, 2];
      case 11:
      case 12:
        return [4, 3, 3, 3, 2, 1];
      case 13:
      case 14:
        return [4, 3, 3, 3, 2, 1, 1];
      case 15:
      case 16:
        return [4, 3, 3, 3, 2, 1, 1, 1];
      case 17:
        return [4, 3, 3, 3, 2, 1, 1, 1, 1];
      case 18:
        return [4, 3, 3, 3, 3, 1, 1, 1, 1];
      case 19:
        return [4, 3, 3, 3, 3, 2, 1, 1, 1];
      case 20:
        return [4, 3, 3, 3, 3, 2, 2, 1, 1];
      default:
        throw new Error('Character level out of bounds');
    }
  }

}
