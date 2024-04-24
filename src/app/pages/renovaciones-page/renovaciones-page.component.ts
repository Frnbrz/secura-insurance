import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BreadCrumbComponent } from '@src/app/components/bread-crumb/bread-crumb.component'
import { MainContainerComponent } from '@src/app/layout'
import { RenovacionesTableComponent } from '../home-page/components/renovaciones-table/renovaciones-table.component'

@Component({
  selector: 'app-renovaciones-page',
  standalone: true,
  imports: [
    MainContainerComponent,
    RenovacionesTableComponent,
    BreadCrumbComponent,
  ],
  templateUrl: './renovaciones-page.component.html',
  styleUrls: ['./renovaciones-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesPageComponent {}
