export interface DetalleInterface {
  nPolicy: number
  riskName: string
  ownerData: OwnerDataInterface
  invoicingDepartment: InvoicingDepartmentInterface
  instalments: InstalmentInterface[]
  paymentMethod: PaymentMethodInterface
  correspondenceAddress: CorrespondenceAddressInterface
  contactData: ContactDataInterface
}

export interface OwnerDataInterface {
  name: string
  surname: string
  cif: string
  email: string
  phone: string
  fiscalAddress: string
  state: string
}

export interface InvoicingDepartmentInterface {
  address: string
  addressCode: string
  postalCode: string
  city: string
  country: string
}

export interface InstalmentInterface {
  issueDate: string
  startDate: string
  endDate: string
  amount: number
  state: string
}

export interface PaymentMethodInterface {
  name: string
  cif: string
  type: string
  iban: string
  bank: string
}

export interface CorrespondenceAddressInterface {
  name: string
  cif: string
  address: string
  postalCode: string
  city: string
  country: string
  addressCode: string
  detail: string
}

export interface ContactDataInterface {
  email: string
  email2: string
  phone: string
}

export const DETALLE: DetalleInterface[] = [
  {
    nPolicy: 1001,
    riskName: 'Automóvil',
    ownerData: {
      name: 'Juan',
      surname: 'Pérez',
      cif: '123456789',
      email: 'juan.perez@example.com',
      phone: '+1234567890',
      fiscalAddress: 'Calle Bravo Murillo 377',
      state: 'vigente',
    },
    invoicingDepartment: {
      address: 'Calle 3424',
      addressCode: '71',
      postalCode: '28001',
      city: 'Madrid',
      country: 'España',
    },
    instalments: [
      {
        issueDate: '2023-05-20T00:00:00Z',
        startDate: '2023-05-20T00:00:00Z',
        endDate: '2024-05-20T00:00:00Z',
        amount: 1200,
        state: 'pendiente',
      },
      {
        issueDate: '2023-05-20T00:00:00Z',
        startDate: '2023-05-20T00:00:00Z',
        endDate: '2024-05-20T00:00:00Z',
        amount: 1200,
        state: 'pagada',
      },
      {
        issueDate: '2023-05-20T00:00:00Z',
        startDate: '2023-05-20T00:00:00Z',
        endDate: '2024-05-20T00:00:00Z',
        amount: 1200,
        state: 'pagada',
      },
    ],
    paymentMethod: {
      name: 'Grupo Sisquella serveis',
      cif: '123456789',
      type: 'Domiciliado estándar',
      iban: 'ES9123456789012345678901',
      bank: 'Banco de Sabadell, S.A.',
    },
    correspondenceAddress: {
      name: 'Grupo Sisquella serveis',
      cif: '123456789',
      address: 'Calle Bravo Murillo 377',
      postalCode: '28001',
      city: 'Madrid',
      country: 'España',
      addressCode: '19',
      detail: 'Bajo',
    },
    contactData: {
      email: 'juan.perez@example.com',
      email2: 'juan.perez2@example.com',
      phone: '+1234567890',
    },
  },
  {
    nPolicy: 1002,
    riskName: 'Hogar',
    ownerData: {
      name: 'María',
      surname: 'González',
      cif: '987654321',
      email: 'maria.gonzalez@example.com',
      phone: '+987654321',
      fiscalAddress: 'Calle Gran Vía 123',
      state: 'vigente',
    },
    invoicingDepartment: {
      address: 'Calle 2323',
      addressCode: '51',
      postalCode: '28010',
      city: 'Madrid',
      country: 'España',
    },
    instalments: [
      {
        issueDate: '2023-07-10T00:00:00Z',
        startDate: '2023-07-10T00:00:00Z',
        endDate: '2024-07-10T00:00:00Z',
        amount: 800,
        state: 'pagada',
      },
      {
        issueDate: '2023-08-10T00:00:00Z',
        startDate: '2023-08-10T00:00:00Z',
        endDate: '2024-08-10T00:00:00Z',
        amount: 800,
        state: 'pendiente',
      },
      {
        issueDate: '2023-09-10T00:00:00Z',
        startDate: '2023-09-10T00:00:00Z',
        endDate: '2024-09-10T00:00:00Z',
        amount: 800,
        state: 'pendiente',
      },
    ],
    paymentMethod: {
      name: 'Grupo González Servicios Financieros',
      cif: '987654321',
      type: 'Domiciliado estándar',
      iban: 'ES9876543210987654321098',
      bank: 'Banco de Madrid, S.A.',
    },
    correspondenceAddress: {
      name: 'Grupo González Servicios Financieros',
      cif: '987654321',
      address: 'Calle Gran Vía 123',
      postalCode: '28010',
      city: 'Madrid',
      country: 'España',
      addressCode: '51',
      detail: 'Bajo',
    },
    contactData: {
      email: 'maria.gonzalez@example.com',
      email2: 'maria.gonzalez2@example.com',
      phone: '+987654321',
    },
  },
]
