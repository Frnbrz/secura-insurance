import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { RenovacionesInterface } from '@src/app/shared/models'
import { map, Observable } from 'rxjs'

const BASE_URL = 'http://localhost:3000/api/v1/'

@Injectable({
  providedIn: 'root',
})
export class RenovacionesService {
  http = inject(HttpClient)
  private totalRenovaciones = signal(0)
  private filteredRenovaciones = signal(0)
  private renovaciones = signal<RenovacionesInterface[]>([])

  setTotalRenovaciones(value: number) {
    this.totalRenovaciones.set(value)
  }

  getTotalRenovaciones() {
    return this.totalRenovaciones
  }

  setFilteredRenovaciones(value: number) {
    this.filteredRenovaciones.set(value)
  }

  getFilteredRenovaciones() {
    return this.filteredRenovaciones
  }

  setRenovaciones(value: RenovacionesInterface[]) {
    this.renovaciones.set(value)
  }

  getRenovacionesArray() {
    return this.renovaciones
  }

  getRenovaciones(tableFilters: any = {}): Observable<RenovacionesInterface[]> {
    console.log(tableFilters)

    const url = `${BASE_URL}renovaciones`

    const searchParams = [
      'state',
      'nPolicy',
      'dateValid',
      'amoutCantity',
      'riskName',
    ]
    const sortParams = ['amount']

    const params: string[] = []

    searchParams.forEach(param => {
      if (tableFilters[param] !== undefined) {
        let queryParam = param
        if (param === 'amoutCantity') {
          queryParam = 'amount'
        }
        params.push(`searchBy=${queryParam}:${tableFilters[param]}`)
      }
    })

    sortParams.forEach(param => {
      if (tableFilters[param]) {
        params.push(`sortBy=${param}:${tableFilters[param]}`)
      }
    })

    console.log(params)

    if (tableFilters.page) {
      params.push(`page=${tableFilters.page}`)
    }

    if (tableFilters.pageSize) {
      params.push(`pageSize=${tableFilters.pageSize}`)
    }

    const fullUrl = params.length ? `${url}?${params.join('&')}` : url

    return this.http.get(fullUrl).pipe(
      map((response: any) => {
        this.setFilteredRenovaciones(response.totalItems)
        if (JSON.stringify(tableFilters) === JSON.stringify({})) {
          this.setTotalRenovaciones(response.totalItems)
        }
        return response.data
      })
    )
  }

  getRenovacion(id: string): Observable<RenovacionesInterface> {
    return this.http.get(`${BASE_URL}renovaciones/${id}`).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }
}
