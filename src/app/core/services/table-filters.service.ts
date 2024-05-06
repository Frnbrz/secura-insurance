import { Injectable, signal } from '@angular/core'

export interface FilterType {
  amountSort?: 'asc' | 'desc'
  nPolicy?: string
  riskName?: string
  dateValid?: string
  amoutCantity?: number
  state?: string
}

const entyFilter: FilterType = {
  amountSort: 'asc',
  nPolicy: '',
  riskName: '',
  dateValid: '',
  amoutCantity: 0,
  state: '',
}

@Injectable({
  providedIn: 'root',
})
export class TableFiltersService {
  private filters = signal<FilterType>(entyFilter)
  private isFilterEnty = signal<boolean>(false)

  setFilterEnty(value: boolean) {
    this.isFilterEnty.set(value)
  }

  setFilter(filter: FilterType) {
    this.filters.set(filter)
    if (this.filters !== entyFilter) {
      this.isFilterEnty.set(false)
    } else {
      this.isFilterEnty.set(true)
    }
    console.log('filter', filter)
    console.log('isFilterEnty', this.isFilterEnty)
  }

  getFilter() {
    return this.filters
  }

  resetFilter() {
    this.filters.set({
      amountSort: 'asc',
      nPolicy: '',
      riskName: '',
      dateValid: '',
      amoutCantity: 0,
      state: '',
    })

    this.isFilterEnty.set(true)
  }
}
