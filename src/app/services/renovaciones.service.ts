import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class RenovacionesService {
  http = inject(HttpClient)
  getDetalleUno() {
    return this.http.get('http://localhost:3000/api/v1/detalle/1')
  }
  getDetalleDos() {
    return this.http.get('http://localhost:3000/api/v1/detalle/2')
  }
}
