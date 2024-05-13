import { Injectable, signal } from '@angular/core'

export interface FilterType {
  amount?: 'asc' | 'desc'
  nPolicy?: string
  riskName?: string
  dateValid?: string
  amoutCantity?: number
  state?: string
}

const entyFilter: FilterType = {}

@Injectable({
  providedIn: 'root',
})
export class TableFiltersService {
  private filters = signal<FilterType>(entyFilter)
  private isFilterEnty = signal<boolean>(false)

  getFilterEnty() {
    return this.isFilterEnty
  }

  getFilterCount() {
    return Object.keys(this.filters).length
  }

  setFilter(filter: FilterType) {
    this.filters.set(filter)
    if (this.filters !== entyFilter) {
      this.isFilterEnty.set(false)
    } else {
      this.isFilterEnty.set(true)
    }
    console.log(this.filters())
  }

  getFilter() {
    return this.filters
  }

  resetFilter() {
    this.filters.set(entyFilter)
    this.isFilterEnty.set(true)
  }
}
