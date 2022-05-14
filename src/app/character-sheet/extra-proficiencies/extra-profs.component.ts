import { Component, Input } from '@angular/core';
import { Proficiencies } from 'src/app/model/character';

@Component({
  selector: 'app-extra-profs',
  templateUrl: './extra-profs.component.html',
  styleUrls: ['./extra-profs.component.scss']
})
export class ExtraProficienciesComponent {

  @Input() proficiencies: Proficiencies;

}
