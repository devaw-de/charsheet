import {ChangeDetectorRef, Component} from '@angular/core';
import {SpellHelper} from '@app/helpers';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../../_base/character-sheet-base.component';

@Component({
  selector: 'app-spell-slot-table',
  templateUrl: './spell-slot-table.component.html',
  styleUrls: ['./spell-slot-table.component.scss']
})
export class SpellSlotTableComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public getMaxCharacterSpellSlots(spellLevel: number): number {
    return SpellHelper.getMaxSpellSlots(this._character.className, this._character.level).get(spellLevel);
  }

  public reduceSpellSlots(spellLevel: number): void {
    const currentSlots = this._character.spellSlots.get(spellLevel);

    if ( currentSlots < 1) {
      return;
    }

    this._characterService.setCurrentSpellSlots(spellLevel, currentSlots - 1);
  }

}
