import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/lib/utils';
import { PlayerCharacterData } from 'src/app/model/character';

@Component({
  selector: 'app-armorclass',
  templateUrl: './armorclass.component.html',
  styleUrls: ['./armorclass.component.scss']
})
export class ArmorclassComponent implements OnInit{

  @Input() character: PlayerCharacterData;
  public armorClass: number;
  public initiave: string;
  public movement: number;

  ngOnInit(): void {
    this.armorClass = this.character.ac;
    this.initiave = Utils.getAbilityModifierAstring(this.character.attributes.dex);
    this.movement = this.character.movementSpeed;
  }

}
