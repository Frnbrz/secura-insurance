export interface DetailsInterface {
  nPolicy: number
  riskName: string
  ownerData: OwnerData
  invoicingDepartment: InvoicingDepartment
  instalments: Instalment[]
  paymentMethod: PaymentMethod
  correspondenceAddress: CorrespondenceAddress
  contactData: ContactData
}

export interface OwnerData {
  name: string
  surname: string
  cif: string
  email: string
  phone: string
  fiscalAddress: string
  state: string
}

export interface InvoicingDepartment {
  address: string
  addressCode: string
  postalCode: string
  city: string
  country: string
}

export interface Instalment {
  issueDate: string
  startDate: string
  endDate: string
  amount: number
  state: string
}

export interface PaymentMethod {
  name: string
  cif: string
  type: string
  iban: string
  bank: string
}

export interface CorrespondenceAddress {
  name: string
  cif: string
  address: string
  postalCode: string
  city: string
  country: string
  addressCode: string
  detail: string
}

export interface ContactData {
  email: string
  email2: string
  phone: string
}
