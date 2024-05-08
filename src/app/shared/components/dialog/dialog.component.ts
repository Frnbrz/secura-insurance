import { Component, Inject, Input } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion'
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title = 'Dialog Title'
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
