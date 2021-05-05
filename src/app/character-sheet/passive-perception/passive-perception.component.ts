import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/lib/utils';
import { Skill } from 'src/app/model/abilities';
import { PlayerCharacterData } from 'src/app/model/character';

@Component({
  selector: 'app-passive-perception',
  templateUrl: './passive-perception.component.html',
  styleUrls: ['./passive-perception.component.scss']
})
export class PassivePerceptionComponent implements OnInit {

  public passivePerception: number;
  @Input() character: PlayerCharacterData;

  ngOnInit(): void {
    this.passivePerception = this._calculatePassivePerception();
  }

  private _calculatePassivePerception(): number {
    const perceptionSkillProficienyBonus: number =
      this.character.proficiencies.skills.includes(Skill.PERCEPTION)
      ? this.character.proficiencies.proficiencyBonus
      : 0;
    const wisdomModifier = Utils.getAbilityModifier(this.character.attributes.wis);
    return 10 + wisdomModifier + perceptionSkillProficienyBonus;
  }

}
