import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { DialogComponent } from '@src/app/shared/components/dialog/dialog.component'
@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent {
  constructor(public dialog: MatDialog) {}

  actualizarDetalle() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda',
      },
    })
  }
}
