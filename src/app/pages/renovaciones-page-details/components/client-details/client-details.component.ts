import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
} from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { DetallesService } from '@src/app/core/services'
import { StatusFlagComponent } from '@src/app/pages/home-page/components'
import { DialogComponent } from '@src/app/shared/components/dialog/dialog.component'
import { OwnerData } from '@src/app/shared/models'
import { OwnerDataFormComponent } from '../owner-data-form/owner-data-form.component'
@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    StatusFlagComponent,
  ],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent {
  detailService = inject(DetallesService)
  details = this.detailService.getDetails()
  ownerData!: OwnerData | null
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef)

  constructor(public dialog: MatDialog) {
    effect(() => {
      console.log('details', this.details())
      this.ownerData = this.details().ownerData
      this.cdr.detectChanges()
    })
  }

  updateOwnerData() {
    this.dialog.open(OwnerDataFormComponent)
  }

  updateInvoicingDepartment() {
    this.dialog.open(DialogComponent)
  }
}
