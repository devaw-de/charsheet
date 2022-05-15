import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';
import {LevelLimits} from '@app/models';

@Component({
  selector: 'app-set-xp',
  templateUrl: './set-xp.component.html',
  styleUrls: ['./set-xp.component.scss']
})
export class SetXpComponent implements OnInit {

  public currentValue: number;
  public currentLevel: number;
  public readonly minValue = 0;
  public readonly maxValue = 355000;
  public readonly levels = new Array(20);

  @ViewChild('xpElement') xpElement: ElementRef;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.currentValue = this._dialogRef.data.currentValue;
    setTimeout(
      () => { this._determineLevel(); },
      10
    );
  }

  private _determineLevel(): void {
    this.currentLevel = LevelLimits.filter(
      limit => limit <= this.currentValue
    ).length - 1; // LevelLimits  = [0, 0, 300, ...]
  }

  public onXpChange(): void {
    this.currentValue = this.xpElement.nativeElement.value;
    this._determineLevel();
  }

  public setLevel(level: number): void {
    this.currentLevel = level;
    this.xpElement.nativeElement.value = LevelLimits[level];
  }

  public save(): void {
    this.currentValue = this.xpElement.nativeElement.value;
    this._dialogRef.close(this.currentValue);
  }

}
