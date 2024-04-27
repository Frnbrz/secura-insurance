import { BreakpointObserver } from '@angular/cdk/layout'
import { NgIf, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenav } from '@angular/material/sidenav'
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
  @ViewChild('sidenav') sidenav: MatSidenav | undefined

  reason = ''

  close(reason: string) {
    this.reason = reason
    this.sidenav?.close()
  }

  clickMenu() {
    this.toolbarStateService.toggle()
  }

  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        if (state.matches) {
          this.toolbarStateService.setToolbarState(false)
          this.sidenav?.close()
        } else {
          this.toolbarStateService.setToolbarState(true)
          this.sidenav?.open()
        }
      })
  }
}
