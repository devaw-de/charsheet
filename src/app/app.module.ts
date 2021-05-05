import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/** Character Sheet */
import { CharacterComponent } from './character-sheet/character.component';
import { AttributesComponent } from './character-sheet/attributes/attributes.component';
import { VitalsComponent } from './character-sheet/vitals/vitals.component';
import { NameComponent } from './character-sheet/name/name.component';
import { BuilderComponent } from './builder/builder.component';
import { EquipmentComponent } from './character-sheet/equipment/equipment.component';
import { CurrencyComponent } from './character-sheet/currency/currency.component';
import { SkillsComponent } from './character-sheet/skills/skills.component';
import { BackgroundComponent } from './character-sheet/background/background.component';
import { ClassIconComponent } from './character-sheet/name/class-icon/class-icon.component';
import { BackgroundSelectionComponent } from './builder/background-selection/background-selection.component';
import { ArmorclassComponent } from './character-sheet/armorclass/armorclass.component';
import { WeaponsComponent } from './character-sheet/weapons/weapons.component';
import { SavingThrowsComponent } from './character-sheet/saving-throws/saving-throws.component';
import { HitpointsComponent } from './character-sheet/hitpoints/hitpoints.component';
import { HitdiceComponent } from './character-sheet/hitdice/hitdice.component';
import { ExtraProficienciesComponent } from './character-sheet/extra-proficiencies/extra-profs.component';
import { NotesComponent } from './character-sheet/notes/notes.component';
import { AmmunitionComponent } from './character-sheet/ammunition/ammunition.component';
import { ProficienciesComponent } from './character-sheet/proficiencies/proficiencies.component';
import { ProficiencyBonusComponent } from './character-sheet/proficiency-bonus/proficiency-bonus.component';
import { InspirationComponent } from './character-sheet/inspiration/inspiration.component';
import { PassivePerceptionComponent } from './character-sheet/passive-perception/passive-perception.component';
import { EditAlignmentComponent } from './character-sheet/background/edit-alignment/edit-alignment.component';
import { EditClassComponent } from './character-sheet/background/edit-class/edit-class.component';
import { EditBackgroundComponent } from './character-sheet/background/edit-background/edit-background.component';
import { EditRaceComponent } from './character-sheet/background/edit-race/edit-race.component';

/* Builder */
import { PointBuyComponent } from './character-sheet/attributes/point-buy/point-buy.component';
import { RaceSelectionComponent } from './builder/race-selection/race-selection.component';
import { ClassSelectionComponent } from './builder/class-selection/class-selection.component';
import { LanguagePickerComponent } from './builder/language-picker/language-picker.component';
import { DialogModule } from '@ngneat/dialog';

/* Components */
import { CloseButtonComponent } from './elements/close-button/close-button.component';
import { EditStringComponent } from './elements/generic-modals/edit-string/edit-string.component';
import { EditNumberComponent } from './elements/generic-modals/edit-number/edit-number.component';
import { SelectSubraceComponent } from './character-sheet/background/select-subrace/select-subrace.component';
import { SelectLevelUpStrategyComponent } from './elements/select-level-up-strategy/select-level-up-strategy.component';
import { EditNotesComponent } from './character-sheet/notes/edit-notes/edit-notes.component';

/* Auto */


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
    CloseButtonComponent,
    WeaponsComponent,
    ArmorclassComponent,
    SavingThrowsComponent,
    HitpointsComponent,
    HitdiceComponent,
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
    SelectSubraceComponent,
    SelectLevelUpStrategyComponent,
    EditNotesComponent
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
