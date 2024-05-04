import { NgIf, NgOptimizedImage } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { ToolbarStateService } from '@src/app/core/services'
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
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav | undefined
  sideNavService = inject(ToolbarStateService)
  toolbarStateService = inject(ToolbarStateService)
  toolbarState = this.toolbarStateService.getToolbarState()

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
}
