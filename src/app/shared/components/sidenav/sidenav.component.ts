import { NgIf, NgOptimizedImage } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { ToolbarStateService } from '@src/app/core/services'
import { merge } from 'rxjs'
import { LinkComponent } from '../link'
import { LanguageMenuComponent } from '../navbar'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgIf,
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
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | undefined
  sideNavService = inject(ToolbarStateService)
  toolbarStateService = inject(ToolbarStateService)
  toolbarState = this.toolbarStateService.getToolbarState()
  sidenavState = this.toolbarStateService.getIsNavSidenav()
  email = new FormControl('', [Validators.required, Validators.email])
  errorMessage = ''

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage())
  }

  clickMenu() {
    this.toolbarStateService.toggle()
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value'
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email'
    } else {
      this.errorMessage = ''
    }
  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      if (this.sidenav) {
        this.sidenav.toggle()
      }
    })
  }
}
