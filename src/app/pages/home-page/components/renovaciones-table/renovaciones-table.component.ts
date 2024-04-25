import { JsonPipe, NgIf, NgStyle } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CurrencyEuroPipe } from '@src/app/pipes'
import { DateEuroPipe } from '@src/app/pipes/date-euro.pipe'
import { TableFiltersService } from '@src/app/services'
import { RenovacionesService } from '@src/app/services/renovaciones.service'
import { RenovacionesInterface } from '@src/core/data/listado_renovaciones'
import { Subscription } from 'rxjs'
import { StatusFlagComponent } from '../status-flag/status-flag.component'

@Component({
  selector: 'app-renovaciones-table',
  standalone: true,
  imports: [
    MatTableModule,
    JsonPipe,
    StatusFlagComponent,
    MatPaginatorModule,
    NgIf,
    NgStyle,
    CurrencyEuroPipe,
    DateEuroPipe,
  ],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent implements OnInit {
  @Input() isOnHomePage = false
  dataSource:
    | MatTableDataSource<RenovacionesInterface>
    | RenovacionesInterface[]
  renovacionesService: RenovacionesService
  tableFilterService: TableFiltersService
  filterSubscription: Subscription
  filter = ''

  destroyRef: DestroyRef
  cdr: ChangeDetectorRef

  @ViewChild(MatPaginator) paginator!: MatPaginator | null

  constructor() {
    this.tableFilterService = inject(TableFiltersService)
    this.dataSource = new MatTableDataSource<RenovacionesInterface>([])
    this.renovacionesService = inject(RenovacionesService)
    this.destroyRef = inject(DestroyRef)
    this.cdr = inject(ChangeDetectorRef)
    this.filterSubscription = this.tableFilterService.filter$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(filter => {
        this.filter = filter
      })
  }

  ngOnInit(): void {
    this.loadCLientes()
  }

  loadCLientes() {
    if (this.isOnHomePage) {
      this.renovacionesService
        .getRenovaciones()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(renovaciones => {
          this.dataSource = (renovaciones as RenovacionesInterface[]).slice(-3)
          this.cdr.detectChanges()
        })
    } else {
      this.renovacionesService
        .getRenovaciones()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(renovaciones => {
          this.dataSource = new MatTableDataSource<RenovacionesInterface>(
            renovaciones
          )

          this.dataSource.paginator = this.paginator
          this.cdr.detectChanges()
        })
    }
  }

  displayedColumns: string[] = [
    'nPolicy',
    'riskName',
    'contractDate',
    'expirationDate',
    'amount',
    'state',
  ]
}
