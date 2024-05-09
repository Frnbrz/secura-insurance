import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { DetallesService } from '@src/app/core/services'
import { StatusFlagComponent } from '@src/app/pages/home-page/components'
import { InstalmentInterface } from '@src/app/shared/models/models'
import { CurrencyEuroPipe, DateEuroPipe } from '@src/app/shared/pipes'

@Component({
  selector: 'app-last-fees',
  standalone: true,
  imports: [
    CurrencyEuroPipe,
    DateEuroPipe,
    MatTableModule,
    StatusFlagComponent,
  ],
  templateUrl: './last-fees.component.html',
  styleUrls: ['./last-fees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastFeesComponent {
  dataSource!: MatTableDataSource<InstalmentInterface>
  detailsService = inject(DetallesService)
  details = this.detailsService.getDetails()

  constructor() {
    effect(
      () => {
        this.dataSource = new MatTableDataSource<InstalmentInterface>([
          {
            issueDate: '2023-05-20T00:00:00Z',
            startDate: '2023-05-20T00:00:00Z',
            endDate: '2024-05-20T00:00:00Z',
            amount: 1200,
            state: 'pendiente',
          },
          {
            issueDate: '2023-05-20T00:00:00Z',
            startDate: '2023-05-20T00:00:00Z',
            endDate: '2024-05-20T00:00:00Z',
            amount: 1200,
            state: 'pagada',
          },
          {
            issueDate: '2023-05-20T00:00:00Z',
            startDate: '2023-05-20T00:00:00Z',
            endDate: '2024-05-20T00:00:00Z',
            amount: 1200,
            state: 'pagada',
          },
        ])
      },
      { allowSignalWrites: true }
    )
  }

  displayedColumns: string[] = ['issueDate', 'period', 'amount', 'state']
}
