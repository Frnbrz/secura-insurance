import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MainContainerComponent } from '@src/app/layout'
import { ProximasRenovacionesComponent } from '../home-page/components'

@Component({
  selector: 'app-renovaciones-page',
  standalone: true,
  imports: [MainContainerComponent, ProximasRenovacionesComponent],
  templateUrl: './renovaciones-page.component.html',
  styleUrls: ['./renovaciones-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesPageComponent {}
