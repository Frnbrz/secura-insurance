import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  http = inject(HttpClient)
  getClientes() {
    return this.http.get('http://localhost:3000/api/v1/clientes')
  }
}
