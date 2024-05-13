import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
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
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './proximas-renovaciones.component.html',
  styleUrls: ['./proximas-renovaciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProximasRenovacionesComponent {}
