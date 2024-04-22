import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MainContainerComponent } from '@src/app/layout'
import { RenovacionesTableComponent } from '../home-page/components/renovaciones-table/renovaciones-table.component'

@Component({
  selector: 'app-renovaciones-page',
  standalone: true,
  imports: [MainContainerComponent, RenovacionesTableComponent],
  templateUrl: './renovaciones-page.component.html',
  styleUrls: ['./renovaciones-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesPageComponent {}
