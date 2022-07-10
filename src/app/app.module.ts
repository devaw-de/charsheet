import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DialogModule} from '@ngneat/dialog';
import {AmmunitionComponent} from './views/character-sheet/ammunition/ammunition.component';
import {ArmorClassComponent} from './views/character-sheet/armorclass/armor-class.component';
import {AttributesComponent} from './views/character-sheet/attributes/attributes.component';
import {BackgroundComponent} from './views/character-sheet/background/background.component';
import {BackgroundSelectionComponent} from './components/modals/background-selection/background-selection.component';
import {CharacterComponent} from './views/character-sheet/character.component';
import {CharacterHistoryComponent} from './views/character-sheet/character-history/character-history.component';
import {ClassIconComponent} from './views/character-sheet/name/class-icon/class-icon.component';
import {ClassSelectionComponent} from './components/modals/class-selection/class-selection.component';
import {ClassSpecialComponent} from './views/character-sheet/class-special/class-special.component';
import {CurrencyComponent} from './views/character-sheet/currency/currency.component';
import {CustomRadioComponent} from './components/custom-radio/custom-radio.component';
import {DeathSavingThrowsComponent} from './views/character-sheet/death-saving-throws/death-saving-throws.component';
import {DebugComponent} from './debug/debug.component';
import {DieRollComponent} from './components/modals/die-roll/die-roll.component';
import {EditAlignmentComponent} from './views/character-sheet/background/edit-alignment/edit-alignment.component';
import {EditBackgroundComponent} from './views/character-sheet/background/edit-background/edit-background.component';
import {EditClassComponent} from './views/character-sheet/background/edit-class/edit-class.component';
import {EditCurrencyComponent} from './components/modals/edit-currency/edit-currency.component';
import {EditNotesComponent} from './components/modals/edit-notes/edit-notes.component';
import {EditNumberComponent} from './components/modals/generic-modals/edit-number/edit-number.component';
import {EditRaceComponent} from './views/character-sheet/background/edit-race/edit-race.component';
import {EditStringComponent} from './components/modals/generic-modals/edit-string/edit-string.component';
import {EditTextComponent} from './components/modals/generic-modals/edit-text/edit-text.component';
import {EquipmentComponent} from './views/character-sheet/equipment/equipment.component';
import {ExtraProficienciesComponent} from './views/character-sheet/extra-proficiencies/extra-profs.component';
import {FaqComponent} from './views/faq/faq.component';
import {FeatsComponent} from './views/character-sheet/feats/feats.component';
import {FeedbackComponent} from './views/feedback/feedback.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HitDiceComponent} from './views/character-sheet/hitdice/hit-dice.component';
import {HitpointsComponent} from './views/character-sheet/hitpoints/hitpoints.component';
import {InspirationComponent} from './views/character-sheet/inspiration/inspiration.component';
import {LanguagePickerComponent} from './components/modals/language-picker/language-picker.component';
import {MenuComponent} from './components/layout/menu/menu.component';
import {NameComponent} from './views/character-sheet/name/name.component';
import {NotesComponent} from './views/character-sheet/notes/notes.component';
import {PassivePerceptionComponent} from './views/character-sheet/passive-perception/passive-perception.component';
import {PointBuyComponent} from './views/character-sheet/attributes/point-buy/point-buy.component';
import {ProficienciesComponent} from './views/character-sheet/proficiencies/proficiencies.component';
import {ProficiencyBonusComponent} from './views/character-sheet/proficiency-bonus/proficiency-bonus.component';
import {RaceSelectionComponent} from './components/modals/race-selection/race-selection.component';
import {SavingThrowsComponent} from './views/character-sheet/saving-throws/saving-throws.component';
import {SelectSubRaceComponent} from './views/character-sheet/background/select-subrace/select-subrace.component';
import {SettingsComponent} from './views/settings/settings.component';
import {SetXpComponent} from './views/character-sheet/background/set-xp/set-xp.component';
import {SkillProficiencySelectionComponent} from './components/modals/skill-proficiency-selection/skill-proficiency-selection.component';
import {SkillsComponent} from './views/character-sheet/skills/skills.component';
import {SpellListTableComponent} from './views/character-sheet/spell-list-table/spell-list-table.component';
import {ToastRendererComponent} from './components/layout/toast-renderer/toast-renderer.component';
import {VitalsComponent} from './views/character-sheet/vitals/vitals.component';
import {WeaponsComponent} from './views/character-sheet/weapons/weapons.component';
import {SpellSlotTableComponent} from './views/character-sheet/class-special/spell-slot-table/spell-slot-table.component';
import {CharacterSheetBaseComponent} from './views/character-sheet/_base/character-sheet-base.component';
import {SpellStatsComponent} from './views/character-sheet/class-special/spell-stats/spell-stats.component';
import {SpellBookComponent} from './components/modals/spell-book/spell-book.component';
import {RestComponent} from './components/modals/rest/rest.component';
import {DamageComponent} from './components/modals/damage/damage.component';
import {CustomButtonComponent} from './components/buttons/custom-button.component';
import {CustomNumberInputComponent} from './components/custom-number-input/custom-number-input.component';
import {CustomCheckboxComponent} from './components/custom-checkbox/custom-checkbox.component';

@NgModule({
  declarations: [
    AmmunitionComponent,
    AppComponent,
    ArmorClassComponent,
    AttributesComponent,
    BackgroundComponent,
    BackgroundSelectionComponent,
    CharacterComponent,
    CharacterHistoryComponent,
    ClassIconComponent,
    ClassSelectionComponent,
    ClassSpecialComponent,
    CurrencyComponent,
    CustomRadioComponent,
    DeathSavingThrowsComponent,
    DebugComponent,
    DieRollComponent,
    EditAlignmentComponent,
    EditBackgroundComponent,
    EditClassComponent,
    EditCurrencyComponent,
    EditNotesComponent,
    EditNumberComponent,
    EditRaceComponent,
    EditStringComponent,
    EditTextComponent,
    EquipmentComponent,
    ExtraProficienciesComponent,
    FaqComponent,
    FeatsComponent,
    FeedbackComponent,
    FooterComponent,
    HitDiceComponent,
    HitpointsComponent,
    InspirationComponent,
    LanguagePickerComponent,
    MenuComponent,
    NameComponent,
    NotesComponent,
    PassivePerceptionComponent,
    PointBuyComponent,
    ProficienciesComponent,
    ProficiencyBonusComponent,
    RaceSelectionComponent,
    SavingThrowsComponent,
    SelectSubRaceComponent,
    SettingsComponent,
    SetXpComponent,
    SkillProficiencySelectionComponent,
    SkillsComponent,
    SpellListTableComponent,
    ToastRendererComponent,
    VitalsComponent,
    WeaponsComponent,
    SpellSlotTableComponent,
    CharacterSheetBaseComponent,
    SpellStatsComponent,
    SpellBookComponent,
    RestComponent,
    DamageComponent,
    CustomButtonComponent,
    CustomNumberInputComponent,
    CustomCheckboxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
