import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MainContainerComponent } from '@src/app/shared/layout'
import {
  ClientDetailsComponent,
  LastFeesComponent,
  MoreClientDetailsComponent,
} from './components'
import { BreadCrumbDetailsComponent } from './components/bread-crumb-details/bread-crumb-details.component'

@Component({
  selector: 'app-renovaciones-page-details',
  standalone: true,
  imports: [
    BreadCrumbDetailsComponent,
    ClientDetailsComponent,
    LastFeesComponent,
    MoreClientDetailsComponent,
    MainContainerComponent,
  ],
  templateUrl: './renovaciones-page-details.component.html',
  styleUrls: ['./renovaciones-page-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesPageDetailsComponent {}
