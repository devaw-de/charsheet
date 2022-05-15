import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

export * from './src/abilityHelper';
export * from './src/classHelper';
export * from './src/diceHelper';
export * from './src/enumHelper';
export * from './src/unitHelper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelpersModule { }
