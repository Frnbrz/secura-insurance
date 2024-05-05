import { NgFor } from '@angular/common'
import { Component, inject, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
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
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
  ],
  templateUrl: './renovaciones-table-header.component.html',
  styleUrls: ['./renovaciones-table-header.component.scss'],
})
export class RenovacionesTableHeaderComponent {
  @ViewChild('filter') public filter: MatSidenav | undefined
  tableFilterService = inject(TableFiltersService)
  filters = ['Mayor importe', 'Menor importe']
  selectedFilter: any = this.filters[0]
  renovacionesService = inject(RenovacionesService)
  polizas = this.renovacionesService.getPolizas()
  toolbarStateService = inject(ToolbarStateService)

  changeFilter(filter: any) {
    this.selectedFilter = filter
    if (filter === 'Mayor importe') {
      this.tableFilterService.setFilter({ amountSort: 'desc' })
    }
    if (filter === 'Menor importe') {
      this.tableFilterService.setFilter({ amountSort: 'asc' })
    }
  }

  clickMenu() {
    this.toolbarStateService.toggle(true)
  }
}
