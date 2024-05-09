import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { DetallesService } from '@src/app/core/services'
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
export class RenovacionesPageDetailsComponent {
  detailService = inject(DetallesService)
  destroyRef = inject(DestroyRef)

  constructor() {
    this.loadDetails()
  }

  loadDetails() {
    this.detailService
      .getDetalleUno()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.detailService.setDetails(data)
      })
  }
}
