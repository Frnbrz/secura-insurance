export interface ClientePotencialInterface {
  offerProduct: string
  personalData: {
    name: string
    surname: string
    email: string
    phone: string
  }
}

export interface ResponseInterface {
  status: string
  data: ClientePotencialInterface[]
}
