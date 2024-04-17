<<<<<<< HEAD
import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
=======
import { NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
>>>>>>> origin/master
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
<<<<<<< HEAD
    MatTooltipModule,
    NgOptimizedImage,
=======
    NgIf,
    MatButtonModule,
>>>>>>> origin/master
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
<<<<<<< HEAD
  @ViewChild('sidenav') sidenav: MatSidenav | undefined

  reason = ''

  close(reason: string) {
    this.reason = reason
    this.sidenav?.close()
  }
=======
  showFiller = false
>>>>>>> origin/master
}
