import { NgFor, NgIf } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { DetallesService } from '@src/app/core/services'
import { DialogComponent } from '@src/app/shared/components/dialog/dialog.component'

@Component({
  selector: 'app-owner-data-form',
  standalone: true,
  imports: [
    DialogComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './owner-data-form.component.html',
  styleUrls: ['./owner-data-form.component.scss'],
})
export class OwnerDataFormComponent {
  detalleService = inject(DetallesService)
  dialogRef = inject(MatDialogRef<OwnerDataFormComponent>)
  error = ''
  ownerForm = new FormGroup({
    cif: new FormControl<string>('', [Validators.minLength(3)]),
    name: new FormControl<string>('', [Validators.minLength(3)]),
    direction: new FormControl<string>('', [Validators.minLength(3)]),
    state: new FormControl<string>('', [Validators.minLength(3)]),
  })

  states = [
    { id: 'pendiente', label: 'Pendiente' },
    { id: 'vencida', label: 'Vencida' },
    { id: 'pagada', label: 'Pagada' },
  ]
  onSubmit(event: Event) {
    event.preventDefault()
    this.detalleService.updateDetalleUno(this.ownerForm.value).subscribe({
      next: () => {
        this.dialogRef.close()

        this.detalleService.getDetalleUno().subscribe(data => {
          this.detalleService.setDetails(data)
        })
      },
      error: () => {
        this.error = 'Ha ocurrido un error'
        console.error('Ha ocurrido un error')
      },
    })
  }

  resetError() {
    this.error = ''
  }
}
