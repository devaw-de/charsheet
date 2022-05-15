import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DialogRef} from '@ngneat/dialog';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit, AfterViewInit {

  public notes: string;

  @ViewChild('textarea') textarea;

  constructor(
    private _dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.notes = this._dialogRef.data.notes.join('\n\n');
  }

  ngAfterViewInit(): void {
    this.textarea.nativeElement.value = this.notes;
    this.textarea.nativeElement.focus();
  }

  public saveNotes(): void {
    this._dialogRef.close(this.textarea.nativeElement.value.split('\n\n'));
  }

}
