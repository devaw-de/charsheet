import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {DialogRef} from '@ngneat/dialog';
import {Alignment} from '@app/models';
import {EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-edit-alignment',
  templateUrl: './edit-alignment.component.html',
  styleUrls: ['./edit-alignment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAlignmentComponent implements OnInit {

  private _alignments: Array<Alignment>;
  public alignmentSets: Array<Array<Alignment>>;

  constructor(
    private _service: CharacterService,
    private _ref: DialogRef
  ) { }

  ngOnInit(): void {
    this._alignments = EnumHelper.getAlignmentsList();
    this.alignmentSets = [
      this._alignments.slice(0, 3),
      this._alignments.slice(3, 6),
      this._alignments.slice(6, 9)
    ];
  }

  public setAlignment(a: Alignment): void {
    this._service.setAlignment(a);
    this._ref.close();
  }

}
