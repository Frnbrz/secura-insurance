import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { RenovacionesInterface } from '@src/core/data/listado_renovaciones'
import { map, Observable } from 'rxjs'

const BASE_URL = 'http://localhost:3000/api/v1/'

@Injectable({
  providedIn: 'root',
})
export class RenovacionesService {
  http = inject(HttpClient)
  private polizas = signal(0)

  getPolizas() {
    return this.polizas
  }

  setPolizas(value: number) {
    this.polizas.set(value)
  }

  getRenovaciones(): Observable<RenovacionesInterface[]> {
    return this.http.get(`${BASE_URL}renovaciones`).pipe(
      map((response: any) => {
        this.setPolizas(response.data.length)
        return response.data
      })
    )
  }
}
