import { LiveAnnouncer } from '@angular/cdk/a11y'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, DestroyRef, effect, inject, ViewChild } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import {
  RenovacionesService,
  TableFiltersService,
  ToolbarStateService,
} from '@src/app/core/services'
import {
  ButtonComponent,
  ButtonOutlineComponent,
} from '@src/app/shared/components'

@Component({
  selector: 'app-renovaciones-table-header',
  standalone: true,
  imports: [
    ButtonComponent,
    ButtonOutlineComponent,
    MatMenuModule,
    MatButtonModule,
    NgFor,
    NgIf,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatChipsModule,
    MatIconModule,
    AsyncPipe,
  ],
  templateUrl: './renovaciones-table-header.component.html',
  styleUrls: ['./renovaciones-table-header.component.scss'],
})
export class RenovacionesTableHeaderComponent {
  @ViewChild('filter') public filter: MatSidenav | undefined
  tableFilterService = inject(TableFiltersService)
  tableFilters = this.tableFilterService.getFilter()
  tableFiltersLength = Object.keys(this.tableFilters()).length
  filters = ['Mayor importe', 'Menor importe', 'Ningun filtro']
  selectedFilter: any = this.filters[0]
  renovacionesService = inject(RenovacionesService)
  totalPolizas = this.renovacionesService.getFilteredRenovaciones()
  toolbarStateService = inject(ToolbarStateService)
  addOnBlur = true
  announcer = inject(LiveAnnouncer)
  readonly separatorKeysCodes = [ENTER, COMMA] as const
  destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {
      this.tableFilters = this.tableFilterService.getFilter()
      this.tableFiltersLength = Object.keys(this.tableFilters()).length
      this.totalPolizas = this.renovacionesService.getFilteredRenovaciones()
    })
  }

  changeFilter(filter: any) {
    this.selectedFilter = filter
    if (filter === 'Mayor importe') {
      this.tableFilterService.setFilter({
        ...this.tableFilters(),
        amount: 'desc',
      })
    }
    if (filter === 'Menor importe') {
      this.tableFilterService.setFilter({
        ...this.tableFilters(),
        amount: 'asc',
      })
    }
    if (filter === 'Ningun filtro') {
      delete this.tableFilters().amount
      this.tableFilterService.setFilter(this.tableFilters())
    }

    this.loadCLientes(this.tableFilters())
  }

  clickMenu() {
    this.toolbarStateService.toggle(true)
  }

  loadCLientes(tableFilters?: any) {
    this.renovacionesService
      .getRenovaciones(tableFilters)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(renovaciones => {
        this.renovacionesService.setRenovaciones(renovaciones)
      })
  }

  remove(filter: string): void {
    const filtersDuplicate: { [key: string]: any } = { ...this.tableFilters() }
    delete filtersDuplicate[filter]
    this.tableFilterService.setFilter(filtersDuplicate)

    this.loadCLientes(this.tableFilters())
  }

  deleteFilters() {
    this.tableFilterService.resetFilter()
    this.loadCLientes()
  }
}
