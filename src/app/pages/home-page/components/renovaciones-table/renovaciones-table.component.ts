import { JsonPipe, NgClass, NgIf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Injectable,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core'

import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatSort } from '@angular/material/sort'
import { RenovacionesInterface } from '@src/app/core/data/'
import {
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
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent implements OnChanges {
  var = false
  @Input() isOnHomePage = false
  dataSource:
    | MatTableDataSource<RenovacionesInterface>
    | RenovacionesInterface[]
  renovacionesService: RenovacionesService
  tableFilterService: TableFiltersService
  tableFilters: any

  destroyRef: DestroyRef
  cdr: ChangeDetectorRef

  @ViewChild(MatPaginator) paginator!: MatPaginator | null
  @ViewChild(MatSort) matSort!: MatSort

  constructor() {
    this.tableFilterService = inject(TableFiltersService)
    this.dataSource = new MatTableDataSource<RenovacionesInterface>([])
    this.renovacionesService = inject(RenovacionesService)
    this.destroyRef = inject(DestroyRef)
    this.cdr = inject(ChangeDetectorRef)
    this.tableFilters = this.tableFilterService.getFilter()

    this.loadCLientes()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)

    if (this.tableFilters().amountSort !== '') {
      this.matSort.sort({
        id: 'amount',
        start: this.tableFilters().amountSort,
        disableClear: false,
      })
    }
    this.cdr.detectChanges()
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
          this.dataSource.sort = this.matSort
          this.cdr.detectChanges()
        })
    }
  }

  applyFiler(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
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
