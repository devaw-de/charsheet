import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DialogModule} from '@ngneat/dialog';

/** Character Sheet */
import {AmmunitionComponent} from './views/character-sheet/ammunition/ammunition.component';
import {ArmorClassComponent} from './views/character-sheet/armorclass/armor-class.component';
import {AttributesComponent} from './views/character-sheet/attributes/attributes.component';
import {BackgroundComponent} from './views/character-sheet/background/background.component';
import {BackgroundSelectionComponent} from './views/builder/background-selection/background-selection.component';
import {BuilderComponent} from './views/builder/builder.component';
import {CharacterComponent} from './views/character-sheet/character.component';
import {CharacterHistoryComponent} from './views/character-sheet/character-history/character-history.component';
import {ClassIconComponent} from './views/character-sheet/name/class-icon/class-icon.component';
import {ClassSelectionComponent} from './views/builder/class-selection/class-selection.component';
import {ClassSpecialComponent} from './views/character-sheet/class-special/class-special.component';
import {CurrencyComponent} from './views/character-sheet/currency/currency.component';
import {DeathSavingThrowsComponent} from './views/character-sheet/death-saving-throws/death-saving-throws.component';
import {EditAlignmentComponent} from './views/character-sheet/background/edit-alignment/edit-alignment.component';
import {EditBackgroundComponent} from './views/character-sheet/background/edit-background/edit-background.component';
import {EditClassComponent} from './views/character-sheet/background/edit-class/edit-class.component';
import {EditCurrencyComponent} from './views/character-sheet/currency/edit-currency/edit-currency.component';
import {EditNotesComponent} from './views/character-sheet/notes/edit-notes/edit-notes.component';
import {EditNumberComponent} from './elements/generic-modals/edit-number/edit-number.component';
import {EditRaceComponent} from './views/character-sheet/background/edit-race/edit-race.component';
import {EditStringComponent} from './elements/generic-modals/edit-string/edit-string.component';
import {EditTextComponent} from './elements/generic-modals/edit-text/edit-text.component';
import {EquipmentComponent} from './views/character-sheet/equipment/equipment.component';
import {ExtraProficienciesComponent} from './views/character-sheet/extra-proficiencies/extra-profs.component';
import {FeatsComponent} from './views/character-sheet/feats/feats.component';
import {HitDiceComponent} from './views/character-sheet/hitdice/hit-dice.component';
import {HitpointsComponent} from './views/character-sheet/hitpoints/hitpoints.component';
import {InspirationComponent} from './views/character-sheet/inspiration/inspiration.component';
import {LanguagePickerComponent} from './views/builder/language-picker/language-picker.component';
import {NameComponent} from './views/character-sheet/name/name.component';
import {NotesComponent} from './views/character-sheet/notes/notes.component';
import {PassivePerceptionComponent} from './views/character-sheet/passive-perception/passive-perception.component';
import {PointBuyComponent} from './views/character-sheet/attributes/point-buy/point-buy.component';
import {ProficienciesComponent} from './views/character-sheet/proficiencies/proficiencies.component';
import {ProficiencyBonusComponent} from './views/character-sheet/proficiency-bonus/proficiency-bonus.component';
import {RaceSelectionComponent} from './views/builder/race-selection/race-selection.component';
import {SavingThrowsComponent} from './views/character-sheet/saving-throws/saving-throws.component';
import {SelectSubRaceComponent} from './views/character-sheet/background/select-subrace/select-subrace.component';
import {SetXpComponent} from './views/character-sheet/background/set-xp/set-xp.component';
import {SkillProficiencySelectionComponent} from './views/character-sheet/skills/skill-proficiency-selection/skill-proficiency-selection.component';
import {SkillsComponent} from './views/character-sheet/skills/skills.component';
import {SpellListTableComponent} from './elements/spell-list-table/spell-list-table.component';
import {VitalsComponent} from './views/character-sheet/vitals/vitals.component';
import {WeaponsComponent} from './views/character-sheet/weapons/weapons.component';
import {FooterComponent} from './elements/footer/footer.component';
import {SettingsComponent} from './views/settings/settings.component';
import {CustomRadioComponent} from './elements/custom-radio/custom-radio.component';
import {FeedbackComponent} from './views/feedback/feedback.component';
import {FaqComponent} from './views/faq/faq.component';
import {ToastRendererComponent} from './elements/toast-renderer/toast-renderer.component';
import {DebugComponent} from './debug/debug.component';
import {DieRollComponent} from './views/character-sheet/die-roll/die-roll.component';
import {MenuComponent} from './elements/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    AttributesComponent,
    VitalsComponent,
    NameComponent,
    BuilderComponent,
    EquipmentComponent,
    CurrencyComponent,
    PointBuyComponent,
    SkillsComponent,
    BackgroundComponent,
    ClassIconComponent,
    BackgroundSelectionComponent,
    RaceSelectionComponent,
    ClassSelectionComponent,
    LanguagePickerComponent,
    WeaponsComponent,
    ArmorClassComponent,
    SavingThrowsComponent,
    HitpointsComponent,
    HitDiceComponent,
    ExtraProficienciesComponent,
    NotesComponent,
    AmmunitionComponent,
    ProficienciesComponent,
    ProficiencyBonusComponent,
    InspirationComponent,
    PassivePerceptionComponent,
    EditAlignmentComponent,
    EditClassComponent,
    EditBackgroundComponent,
    EditRaceComponent,
    EditStringComponent,
    EditNumberComponent,
    SelectSubRaceComponent,
    EditNotesComponent,
    SkillProficiencySelectionComponent,
    EditCurrencyComponent,
    DeathSavingThrowsComponent,
    DieRollComponent,
    ClassSpecialComponent,
    SpellListTableComponent,
    FeatsComponent,
    SetXpComponent,
    CharacterHistoryComponent,
    EditTextComponent,
    SettingsComponent,
    FooterComponent,
    CustomRadioComponent,
    FeedbackComponent,
    FaqComponent,
    ToastRendererComponent,
    DebugComponent,
    MenuComponent
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
