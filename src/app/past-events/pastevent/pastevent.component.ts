import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pastevent',
  templateUrl: './pastevent.component.html',
  styleUrls: ['./pastevent.component.css'],
})
export class PastEventComponent implements OnInit {
  place: string;
  image: string;
  name: string;
  date: string;
  description: string;

  @Input() set event(value: any) {
    if (value) {
      this.place = value.place;
      this.image = '../../../assets/img/uploads/' + value.image;
      this.name = value.name;
      this.date = value.date;
      this.description = value.description;
    }
  }
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }
  ngOnInit(): void {}
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  description: string;
  name: string;
  @Input() set event(value: any) {
    if (value) {
      this.description = value.description;
    }
  }
}
