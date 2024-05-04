import { JsonPipe, NgClass, NgIf } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  Injectable,
  Input,
  Signal,
  ViewChild,
} from '@angular/core'

import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatSort, MatSortModule, Sort } from '@angular/material/sort'
import { RenovacionesInterface } from '@src/app/core/data/'
import {
  FilterType,
  RenovacionesService,
  TableFiltersService,
} from '@src/app/core/services'
import { SpinnerComponent } from '@src/app/shared/components'
import { CurrencyEuroPipe, DateEuroPipe } from '@src/app/shared/pipes'
import { Subject } from 'rxjs'
import { StatusFlagComponent } from '../status-flag/status-flag.component'

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>()
  firstPageLabel = $localize`Primera página`
  itemsPerPageLabel = $localize`Filas por página:`
  lastPageLabel = $localize`Última página`
  nextPageLabel = 'Página siguiente'
  previousPageLabel = 'Página anterior'
  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Página 1 de 1`
    }
    const amountPages = Math.ceil(length / pageSize)
    return $localize`Página ${page + 1} de ${amountPages}`
  }
}

@Component({
  selector: 'app-renovaciones-table',
  standalone: true,
  imports: [
    MatTableModule,
    JsonPipe,
    StatusFlagComponent,
    MatPaginatorModule,
    NgIf,
    NgClass,
    CurrencyEuroPipe,
    DateEuroPipe,
    SpinnerComponent,
    MatSortModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent implements AfterViewInit {
  var = false
  @Input() isOnHomePage = false
  dataSource: MatTableDataSource<RenovacionesInterface>
  renovacionesService: RenovacionesService
  tableFilterService: TableFiltersService
  tableFilters: Signal<FilterType>
  destroyRef: DestroyRef
  cdr: ChangeDetectorRef

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor() {
    this.tableFilterService = inject(TableFiltersService)
    this.dataSource = new MatTableDataSource<RenovacionesInterface>([])
    this.renovacionesService = inject(RenovacionesService)
    this.destroyRef = inject(DestroyRef)
    this.cdr = inject(ChangeDetectorRef)
    this.tableFilters = this.tableFilterService.getFilter()

    this.loadCLientes()

    effect(() => {
      const amountSort = this.tableFilters()?.amountSort || 'asc'
      this.sortData({
        active: 'amount',
        direction: amountSort,
      })
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data

    const toBeSorted = [...data]
    let unsorted: RenovacionesInterface[] = []

    if (toBeSorted.length >= 4) {
      unsorted = toBeSorted.splice(-4)
    }

    toBeSorted.sort((a, b) => {
      const isAsc = sort.direction === 'asc'
      switch (sort.active) {
        case 'nPolicy':
          return this.compare(a.nPolicy, b.nPolicy, isAsc)
        case 'riskName':
          return this.compare(a.riskName, b.riskName, isAsc)
        case 'contractDate':
          return this.compare(a.contractDate, b.contractDate, isAsc)
        case 'expirationDate':
          return this.compare(a.expirationDate, b.expirationDate, isAsc)
        case 'amount':
          return this.compare(a.amount, b.amount, isAsc)
        case 'state':
          return this.compare(a.state, b.state, isAsc)
        default:
          return 0
      }
    })

    this.dataSource.data = [...toBeSorted, ...unsorted]
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  loadCLientes() {
    this.renovacionesService
      .getRenovaciones()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(renovaciones => {
        if (this.isOnHomePage) {
          this.dataSource = new MatTableDataSource<RenovacionesInterface>(
            renovaciones.slice(-3)
          )
        } else {
          this.dataSource = new MatTableDataSource<RenovacionesInterface>(
            renovaciones
          )
        }
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        this.cdr.detectChanges()
      })
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
