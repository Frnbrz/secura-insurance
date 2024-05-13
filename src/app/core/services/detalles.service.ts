import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { map } from 'rxjs'
interface Detail {
  nPolicy: number
  riskName: string
  ownerData: {
    name: string
    surname: string
    cif: string
    email: string
    phone: string
    fiscalAddress: string
    state: string
  }
  invoicingDepartment: {
    address: string
    addressCode: string
    postalCode: string
    city: string
    country: string
  }
  instalments: {
    issueDate: string
    startDate: string
    endDate: string
    amount: number
    state: string
  }[]
}

const emptyDetail: Detail = {
  nPolicy: 0,
  riskName: '',
  ownerData: {
    name: '',
    surname: '',
    cif: '',
    email: '',
    phone: '',
    fiscalAddress: '',
    state: '',
  },
  invoicingDepartment: {
    address: '',
    addressCode: '',
    postalCode: '',
    city: '',
    country: '',
  },
  instalments: [],
}

const EntyDetail = { ...emptyDetail }

@Injectable({
  providedIn: 'root',
})
export class DetallesService {
  details = signal(EntyDetail)
  http = inject(HttpClient)
  getDetalleUno() {
    return this.http.get('http://localhost:3000/api/v1/detalles/1').pipe(
      map((response: any) => {
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

  updateDetalleUno(data: any) {
    return this.http.patch(
      'http://localhost:3000/api/v1/detalles/1/ownerdata',
      data
    )
  }

  getDetails() {
    return this.details
  }

  setDetails(data: Detail) {
    this.details.set(data)
  }
}
