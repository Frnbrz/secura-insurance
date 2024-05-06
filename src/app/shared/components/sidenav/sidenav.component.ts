import { NgFor, NgIf, NgOptimizedImage } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import {
  TableFiltersService,
  ToolbarStateService,
} from '@src/app/core/services'
import { ButtonComponent } from '../button'
import { ButtonOutlineComponent } from '../button-outline'
import { LinkComponent } from '../link'
import { LanguageMenuComponent } from '../navbar'

interface FilterType {
  amountSort?: 'asc' | 'desc'
  nPolicy?: string
  riskName?: string
  dateValid?: string
  amoutCantity?: number
  state?: string
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgOptimizedImage,
    MatSidenavModule,
    LanguageMenuComponent,
    LinkComponent,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonOutlineComponent,
    ButtonComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | undefined
  sideNavService = inject(ToolbarStateService)
  toolbarStateService = inject(ToolbarStateService)
  tableFiltersService = inject(TableFiltersService)
  toolbarState = this.toolbarStateService.getToolbarState()
  sidenavState = this.toolbarStateService.getIsNavSidenav()
  errorMessage = ''
  minDate: Date
  maxDate: Date
  states = [
    { id: 'all', label: 'Todos los estados' },
    { id: 'pendiente', label: 'Pendiente' },
    { id: 'vencida', label: 'Vencida' },
    { id: 'pagada', label: 'Pagada' },
  ]

  form = new FormGroup({
    nPolicy: new FormControl<string>('', [Validators.minLength(3)]),
    riskName: new FormControl<string>('', [Validators.minLength(3)]),
    dateValid: new FormControl<string>('', [Validators.minLength(3)]),
    amoutCantity: new FormControl<number>(0, [Validators.min(0)]),
    state: new FormControl<string>('', [Validators.minLength(3)]),
  })

  constructor() {
    const currentYear = new Date().getFullYear()
    this.minDate = new Date(currentYear - 20, 0, 1)
    this.maxDate = new Date(currentYear + 1, 11, 31)
  }

  clickMenu() {
    this.toolbarStateService.toggle()
  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      if (this.sidenav) {
        this.sidenav.toggle()
      }
    })
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.invalid) {
      this.errorMessage = 'Debe rellenar los campos correctamente'
      return
    }
    this.errorMessage = ''
    const filterValue: FilterType = { ...(this.form.value as FilterType) }
    if (filterValue.nPolicy === null) {
      filterValue.nPolicy = undefined
    }
    if (filterValue.riskName === null) {
      filterValue.riskName = undefined
    }
    if (filterValue.dateValid === null) {
      filterValue.dateValid = undefined
    }
    if (filterValue.amoutCantity === null) {
      filterValue.amoutCantity = undefined
    }
    if (filterValue.state === null) {
      filterValue.state = undefined
    }
    if (filterValue.state === 'all') {
      filterValue.state = undefined
    }

    this.tableFiltersService.setFilter(filterValue)
  }
}
