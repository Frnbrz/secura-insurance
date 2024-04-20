import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonComponent } from '@src/app/components'
import { SectionContainerComponent } from '@src/app/layout/section-container/section-container.component'
import { RenovacionesTableComponent } from '../renovaciones-table/renovaciones-table.component'

@Component({
  selector: 'app-proximas-renovaciones',
  standalone: true,
  imports: [
    ButtonComponent,
    RenovacionesTableComponent,
    SectionContainerComponent,
  ],
  templateUrl: './proximas-renovaciones.component.html',
  styleUrls: ['./proximas-renovaciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProximasRenovacionesComponent {}
