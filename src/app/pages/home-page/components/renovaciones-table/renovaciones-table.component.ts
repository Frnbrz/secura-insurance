import { JsonPipe, NgClass, NgIf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  Injectable,
  Input,
  ViewChild,
} from '@angular/core'

import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatSortModule } from '@angular/material/sort'
import {
  RenovacionesService,
  TableFiltersService,
} from '@src/app/core/services'
import { LinkComponent, SpinnerComponent } from '@src/app/shared/components'
import { RenovacionesInterface } from '@src/app/shared/models'
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
    LinkComponent,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent {
  var = false
  @Input() isOnHomePage = false
  dataSource = new MatTableDataSource<RenovacionesInterface>([])
  renovacionesService = inject(RenovacionesService)
  tableFilterService = inject(TableFiltersService)
  renovaciones = this.renovacionesService.getRenovacionesArray()
  tableFilters = this.tableFilterService.getFilter()
  destroyRef = inject(DestroyRef)
  cdr = inject(ChangeDetectorRef)
  tableFiltersLength = 0

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor() {
    this.loadCLientes()
    this.dataSource = new MatTableDataSource<RenovacionesInterface>(
      this.renovaciones()
    )

    effect(() => {
      this.tableFilters = this.tableFilterService.getFilter()
      this.tableFiltersLength = Object.keys(this.tableFilters()).length
      this.renovaciones = this.renovacionesService.getRenovacionesArray()
      this.dataSource.data = this.renovaciones()
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  loadCLientes(tableFilters?: any) {
    this.renovacionesService
      .getRenovaciones(tableFilters)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(renovaciones => {
        this.renovacionesService.setRenovaciones(renovaciones)

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
