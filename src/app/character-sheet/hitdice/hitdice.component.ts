import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Dice } from 'src/app/model/base';

@Component({
  selector: 'app-hitdice',
  templateUrl: './hitdice.component.html',
  styleUrls: ['./hitdice.component.scss']
})
export class HitdiceComponent implements OnInit, AfterViewInit {

  @Input() hitdice: Array<Dice>;
  public d6: number = 0;
  public d8: number = 0;
  public d10: number = 0;
  public d12: number = 0;

  ngOnInit(): void {
    this.d6 = this.hitdice.filter(d => d === Dice.D6).length;
    this.d8 = this.hitdice.filter(d => d === Dice.D8).length;
    this.d10 = this.hitdice.filter(d => d === Dice.D10).length;
    this.d12 = this.hitdice.filter(d => d === Dice.D12).length;
  }

  ngAfterViewInit(): void {

  }
}
