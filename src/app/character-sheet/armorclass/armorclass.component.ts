import { Component, Input } from '@angular/core';
import { Utils } from 'src/app/lib/utils';
import { PlayerCharacterData } from 'src/app/model/character';

@Component({
  selector: 'app-armorclass',
  templateUrl: './armorclass.component.html',
  styleUrls: ['./armorclass.component.scss']
})
export class ArmorclassComponent {

  Utils = Utils;

  @Input() character: PlayerCharacterData;

}
