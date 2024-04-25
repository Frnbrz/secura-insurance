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

export const CLIENTES_POTENCIALES: ClientePotencialInterface[] = [
  {
    offerProduct: 'Seguro de vida',
    personalData: {
      name: 'Juan',
      surname: 'Pérez',
      email: 'juan.perez@example.com',
      phone: '+1234567890',
    },
  },
  {
    offerProduct: 'Seguro de moto',
    personalData: {
      name: 'María',
      surname: 'González',
      email: 'maria.gonzalez@example.com',
      phone: '+1987654321',
    },
  },
  {
    offerProduct: 'Seguro de casa',
    personalData: {
      name: 'Carlos',
      surname: 'Sánchez',
      email: 'carlos.sanchez@example.com',
      phone: '+1122334455',
    },
  },
]
