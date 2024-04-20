export interface RenovacionesInterface {
  nPolicy: number
  riskName: string
  contractDate: string
  expirationDate: string
  amount: number
  state: string
}

export const LISTADO_RENOVACIONES: RenovacionesInterface[] = [
  {
    nPolicy: 1001,
    riskName: 'Automóvil',
    contractDate: '2023-05-20T00:00:00Z',
    expirationDate: '2024-05-20T00:00:00Z',
    amount: 1200,
    state: 'pendiente',
  },
  {
    nPolicy: 1002,
    riskName: 'Hogar',
    contractDate: '2023-07-10T00:00:00Z',
    expirationDate: '2024-07-10T00:00:00Z',
    amount: 800,
    state: 'pagada',
  },
  {
    nPolicy: 1003,
    riskName: 'Vida',
    contractDate: '2023-09-15T00:00:00Z',
    expirationDate: '2024-09-15T00:00:00Z',
    amount: 1500,
    state: 'vencida',
  },
  {
    nPolicy: 1004,
    riskName: 'Salud',
    contractDate: '2023-10-30T00:00:00Z',
    expirationDate: '2024-10-30T00:00:00Z',
    amount: 2000,
    state: 'pendiente',
  },
  {
    nPolicy: 1005,
    riskName: 'Responsabilidad Civil',
    contractDate: '2023-12-05T00:00:00Z',
    expirationDate: '2024-12-05T00:00:00Z',
    amount: 1800,
    state: 'pagada',
  },
  {
    nPolicy: 1006,
    riskName: 'Accidentes Personales',
    contractDate: '2024-01-20T00:00:00Z',
    expirationDate: '2025-01-20T00:00:00Z',
    amount: 1000,
    state: 'pendiente',
  },
  {
    nPolicy: 1007,
    riskName: 'Robo',
    contractDate: '2024-03-08T00:00:00Z',
    expirationDate: '2025-03-08T00:00:00Z',
    amount: 1350,
    state: 'vencida',
  },
  {
    nPolicy: 1008,
    riskName: 'Viajes',
    contractDate: '2024-04-15T00:00:00Z',
    expirationDate: '2025-04-15T00:00:00Z',
    amount: 2200,
    state: 'pendiente',
  },
  {
    nPolicy: 1009,
    riskName: 'Incendio',
    contractDate: '2024-06-20T00:00:00Z',
    expirationDate: '2025-06-20T00:00:00Z',
    amount: 1750,
    state: 'pagada',
  },
  {
    nPolicy: 1010,
    riskName: 'Inundación',
    contractDate: '2024-08-10T00:00:00Z',
    expirationDate: '2025-08-10T00:00:00Z',
    amount: 1900,
    state: 'vencida',
  },
  {
    nPolicy: 1011,
    riskName: 'Terremoto',
    contractDate: '2024-09-25T00:00:00Z',
    expirationDate: '2025-09-25T00:00:00Z',
    amount: 2050,
    state: 'pendiente',
  },
  {
    nPolicy: 1012,
    riskName: 'Responsabilidad Civil Profesional',
    contractDate: '2024-11-12T00:00:00Z',
    expirationDate: '2025-11-12T00:00:00Z',
    amount: 2400,
    state: 'pagada',
  },
  {
    nPolicy: 1013,
    riskName: 'Ciberseguridad',
    contractDate: '2024-12-30T00:00:00Z',
    expirationDate: '2025-12-30T00:00:00Z',
    amount: 1850,
    state: 'vencida',
  },
  {
    nPolicy: 1014,
    riskName: 'Mascotas',
    contractDate: '2025-02-05T00:00:00Z',
    expirationDate: '2026-02-05T00:00:00Z',
    amount: 1300,
    state: 'pendiente',
  },
  {
    nPolicy: 1015,
    riskName: 'Responsabilidad Civil del Patrono',
    contractDate: '2025-04-20T00:00:00Z',
    expirationDate: '2026-04-20T00:00:00Z',
    amount: 1950,
    state: 'pagada',
  },
  {
    nPolicy: 1016,
    riskName: 'Asistencia en Carretera',
    contractDate: '2025-06-10T00:00:00Z',
    expirationDate: '2026-06-10T00:00:00Z',
    amount: 1100,
    state: 'vencida',
  },
]
