import {Component, OnInit} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {SkillName} from '@app/models';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-skill-proficiency-selection',
  templateUrl: './skill-proficiency-selection.component.html',
  styleUrls: ['./skill-proficiency-selection.component.scss']
})
export class SkillProficiencySelectionComponent implements OnInit {

  public readonly availableSkills: Array<SkillName> = EnumHelper.getSkillList();
  public selectedSkills: Array<SkillName>;
  public pickableSkills: Array<SkillName>;
  public maxSelections: number;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.selectedSkills = this._dialogRef.data.selectedSkills;
    this.maxSelections = this._dialogRef.data.maxSelections;
    this.pickableSkills = this._dialogRef.data.pickabledSkills;
  }

  public toggle(skill: SkillName): void {
    if (!this.pickableSkills.includes(skill)) { return; }

    if (!this.selectedSkills.includes(skill)) {
      if (this.maxSelections <= this.selectedSkills.length) {
        return;
      }
      this.selectedSkills.push(skill);
    } else {
      this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    }
  }

  public save(): void {
    this._dialogRef.close(this.selectedSkills);
  }

}
