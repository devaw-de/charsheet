import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { Utils } from 'src/app/lib/utils';
import { Skill } from 'src/app/model/abilities';

@Component({
  selector: 'app-skill-proficiency-selection',
  templateUrl: './skill-proficiency-selection.component.html',
  styleUrls: ['./skill-proficiency-selection.component.scss']
})
export class SkillProficiencySelectionComponent implements OnInit {

  public readonly availableSkills: Array<Skill> = Utils.getSkillList();
  public selectedSkills: Array<Skill>;
  public pickableSkills: Array<Skill>;
  public maxSelections: number;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.selectedSkills = this._dialogRef.data.selectedSkills;
    this.maxSelections = this._dialogRef.data.maxSelections;
    this.pickableSkills = this._dialogRef.data.pickabledSkills;
  }

  public toggle(skill: Skill): void {
    if(!this.pickableSkills.includes(skill)) return;

    if(!this.selectedSkills.includes(skill)) {
      if(this.maxSelections <= this.selectedSkills.length) {
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