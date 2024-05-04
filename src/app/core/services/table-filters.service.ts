import { Injectable, signal } from '@angular/core'

export interface FilterType {
  amountSort?: 'asc' | 'desc'
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
    amountSort: 'asc',
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
