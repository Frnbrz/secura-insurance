import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenav } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import {
  LanguageMenuComponent,
  ProfileMenuComponent,
} from '@src/app/components/navbar'
import { LinkComponent } from '../link/link.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    ProfileMenuComponent,
    LanguageMenuComponent,
    LinkComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined

  reason = ''

  close(reason: string) {
    this.reason = reason
    this.sidenav?.close()
  }
}
