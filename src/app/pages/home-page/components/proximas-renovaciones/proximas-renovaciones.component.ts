import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LinkComponent } from '@src/app/components/link/link.component'
import { SectionContainerComponent } from '@src/app/layout/section-container/section-container.component'
import { RenovacionesTableComponent } from '../renovaciones-table/renovaciones-table.component'

@Component({
  selector: 'app-proximas-renovaciones',
  standalone: true,
  imports: [
    LinkComponent,
    RenovacionesTableComponent,
    SectionContainerComponent,
  ],
  templateUrl: './proximas-renovaciones.component.html',
  styleUrls: ['./proximas-renovaciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProximasRenovacionesComponent {}
