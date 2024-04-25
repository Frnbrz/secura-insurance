import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { ClientePotencialInterface } from '@src/core/data/clientes_potenciales'
import { map, Observable } from 'rxjs'

const BASE_URL = 'http://localhost:3000/api/v1/'

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  http = inject(HttpClient)
  getClientes(): Observable<ClientePotencialInterface[]> {
    return this.http
      .get(`${BASE_URL}clientes`)
      .pipe(map((response: any) => response.data))
  }
}
