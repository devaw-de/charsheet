import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DialogModule} from '@ngneat/dialog';

/** Character Sheet */
import {CharacterComponent} from './character-sheet/character.component';
import {AttributesComponent} from './character-sheet/attributes/attributes.component';
import {VitalsComponent} from './character-sheet/vitals/vitals.component';
import {NameComponent} from './character-sheet/name/name.component';
import {BuilderComponent} from './builder/builder.component';
import {EquipmentComponent} from './character-sheet/equipment/equipment.component';
import {CurrencyComponent} from './character-sheet/currency/currency.component';
import {SkillsComponent} from './character-sheet/skills/skills.component';
import {BackgroundComponent} from './character-sheet/background/background.component';
import {ClassIconComponent} from './character-sheet/name/class-icon/class-icon.component';
import {BackgroundSelectionComponent} from './builder/background-selection/background-selection.component';
import {ArmorClassComponent} from './character-sheet/armorclass/armor-class.component';
import {WeaponsComponent} from './character-sheet/weapons/weapons.component';
import {SavingThrowsComponent} from './character-sheet/saving-throws/saving-throws.component';
import {HitpointsComponent} from './character-sheet/hitpoints/hitpoints.component';
import {HitDiceComponent} from './character-sheet/hitdice/hit-dice.component';
import {ExtraProficienciesComponent} from './character-sheet/extra-proficiencies/extra-profs.component';
import {NotesComponent} from './character-sheet/notes/notes.component';
import {AmmunitionComponent} from './character-sheet/ammunition/ammunition.component';
import {ProficienciesComponent} from './character-sheet/proficiencies/proficiencies.component';
import {ProficiencyBonusComponent} from './character-sheet/proficiency-bonus/proficiency-bonus.component';
import {InspirationComponent} from './character-sheet/inspiration/inspiration.component';
import {PassivePerceptionComponent} from './character-sheet/passive-perception/passive-perception.component';
import {EditAlignmentComponent} from './character-sheet/background/edit-alignment/edit-alignment.component';
import {EditClassComponent} from './character-sheet/background/edit-class/edit-class.component';
import {EditBackgroundComponent} from './character-sheet/background/edit-background/edit-background.component';
import {EditRaceComponent} from './character-sheet/background/edit-race/edit-race.component';
import {SkillProficiencySelectionComponent} from './character-sheet/skills/skill-proficiency-selection/skill-proficiency-selection.component';
import {DeathSavingThrowsComponent} from './character-sheet/death-saving-throws/death-saving-throws.component';
import {PointBuyComponent} from './character-sheet/attributes/point-buy/point-buy.component';
import {RaceSelectionComponent} from './builder/race-selection/race-selection.component';
import {ClassSelectionComponent} from './builder/class-selection/class-selection.component';
import {LanguagePickerComponent} from './builder/language-picker/language-picker.component';
import {EditStringComponent} from './elements/generic-modals/edit-string/edit-string.component';
import {EditTextComponent} from './elements/generic-modals/edit-text/edit-text.component';
import {EditNumberComponent} from './elements/generic-modals/edit-number/edit-number.component';
import {EditNotesComponent} from './character-sheet/notes/edit-notes/edit-notes.component';
import {SelectSubRaceComponent} from './character-sheet/background/select-subrace/select-subrace.component';
import {EditCurrencyComponent} from './character-sheet/currency/edit-currency/edit-currency.component';
import {ClassSpecialComponent} from './character-sheet/class-special/class-special.component';
import {SpellListTableComponent} from './elements/spell-list-table/spell-list-table.component';
import {FeatsComponent} from './character-sheet/feats/feats.component';
import {SetXpComponent} from './character-sheet/background/set-xp/set-xp.component';
import {CharacterHistoryComponent} from './character-sheet/character-history/character-history.component';

/** Boilerplate */
import {FooterComponent} from './footer/footer.component';
import {SettingsComponent} from './settings/settings.component';
import {CustomRadioComponent} from './elements/custom-radio/custom-radio.component';


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
    ClassSpecialComponent,
    SpellListTableComponent,
    FeatsComponent,
    SetXpComponent,
    CharacterHistoryComponent,
    EditTextComponent,
    SettingsComponent,
    FooterComponent,
    CustomRadioComponent
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
