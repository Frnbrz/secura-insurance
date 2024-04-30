import { Injectable, signal } from '@angular/core'

interface FilterType {
  amountSort?: string
  nPolicy?: string
  riskName?: string
  dateValid?: string
  amoutCantity?: number
  state?: string
}

@Injectable({
  providedIn: 'root',
})
export class TableFiltersService {
  private filters = signal<FilterType>({
    amountSort: '',
    nPolicy: '',
    riskName: '',
    dateValid: '',
    amoutCantity: 0,
    state: '',
  })

  setFilter(filter: FilterType) {
    this.filters.set(filter)
  }

  getFilter() {
    return this.filters
  }
}
