import { NgFor } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import {
  RenovacionesService,
  TableFiltersService,
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
  ],
  templateUrl: './renovaciones-table-header.component.html',
  styleUrls: ['./renovaciones-table-header.component.scss'],
})
export class RenovacionesTableHeaderComponent {
  tableFilterService = inject(TableFiltersService)
  filters = ['Mayor importe', 'Menor importe']
  selectedFilter: any = this.filters[0]
  renovacionesService = inject(RenovacionesService)
  polizas = this.renovacionesService.getPolizas()

  changeFilter(filter: any) {
    this.selectedFilter = filter
    this.tableFilterService.setFilter(filter)
  }
}
