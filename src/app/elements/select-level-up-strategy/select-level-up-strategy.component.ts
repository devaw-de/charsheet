import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/lib/character.service';
import { Utils } from 'src/app/lib/utils';
import { LevelUpStrategy } from 'src/app/model/settings';

@Component({
  selector: 'app-select-level-up-strategy',
  templateUrl: './select-level-up-strategy.component.html',
  styleUrls: ['./select-level-up-strategy.component.scss']
})
export class SelectLevelUpStrategyComponent implements OnInit {

  public strategy: LevelUpStrategy;
  public availableStrategies: Array<LevelUpStrategy>;

  constructor(
    private _service: CharacterService
  ) { }

  ngOnInit(): void {
    this.strategy = this._service.getLevelUpStrategy();
    this.availableStrategies = Utils.getLevelUpStrategyList();
  }

  public selectStrategy(strategy: LevelUpStrategy): void {
    if(strategy === LevelUpStrategy.ROLL) return;

    this.strategy = strategy;
    this._service.setLevelUpStrategy(strategy);
  }

}
