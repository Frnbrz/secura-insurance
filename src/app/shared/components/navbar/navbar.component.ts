import { BreakpointObserver } from '@angular/cdk/layout'
import { NgIf, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ToolbarStateService } from '@src/app/core/services'
import {
  LanguageMenuComponent,
  ProfileMenuComponent,
} from '@src/app/shared/components/navbar'
import { LinkComponent } from '../link/link.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    ProfileMenuComponent,
    LanguageMenuComponent,
    LinkComponent,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  toolbarStateService = inject(ToolbarStateService)
  toolbarState = this.toolbarStateService.getToolbarState()
  breakpointObserver = inject(BreakpointObserver)
  destroyRef = inject(DestroyRef)

  clickMenu() {
    this.toolbarStateService.toggle()
  }

  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        const isSmallScreen = state.matches

        if (isSmallScreen) {
          // Si es una pantalla pequeña, establece el estado de la barra de herramientas en false
          this.toolbarStateService.setToolbarState(false)
        } else {
          // Si es una pantalla grande, establece el estado de la barra de herramientas en true
          this.toolbarStateService.setToolbarState(true)

          // Comprueba si la barra de herramientas está abierta
          const isToolbarOpen = this.toolbarStateService.getIsOpen()

          // Si la barra de herramientas está abierta, cambia su estado
          if (isToolbarOpen) this.toolbarStateService.toggle()
        }
      })
  }
}
