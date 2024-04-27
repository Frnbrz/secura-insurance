import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonComponent } from '@src/app/shared/components'
import { SectionContainerComponent } from '@src/app/shared/layout'
import { RenovacionesTableComponent } from '../renovaciones-table'

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
