import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DetallesService {
  details = signal({})
  http = inject(HttpClient)
  getDetalleUno() {
    return this.http.get('http://localhost:3000/api/v1/detalles/1').pipe(
      map((response: any) => {
        this.setDetails(response.data)
        console.log(response.data)
        return response.data
      })
    )
  }
  getDetalleDos() {
    return this.http.get('http://localhost:3000/api/v1/detalles/2').pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

  getDetails() {
    return this.details
  }

  setDetails(data: any) {
    this.details.set(data)
  }
}
