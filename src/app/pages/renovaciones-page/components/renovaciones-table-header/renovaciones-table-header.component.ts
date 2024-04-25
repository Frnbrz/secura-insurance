import { NgFor } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { ButtonComponent, ButtonOutlineComponent } from '@src/app/components'
import { TableFiltersService } from '@src/app/services'

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

  changeFilter(filter: any) {
    this.selectedFilter = filter
    this.tableFilterService.setFilter(filter)
  }
}
