import { Component } from '@angular/core'
import { ButtonComponent } from '@src/app/components'
import { RenovacionesTableComponent } from '../renovaciones-table/renovaciones-table.component'

@Component({
  selector: 'app-proximas-renovaciones',
  standalone: true,
  imports: [ButtonComponent, RenovacionesTableComponent],
  templateUrl: './proximas-renovaciones.component.html',
  styleUrls: ['./proximas-renovaciones.component.scss'],
})
export class ProximasRenovacionesComponent {}
