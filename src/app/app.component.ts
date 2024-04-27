import { NgIf, NgOptimizedImage } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { RouterOutlet } from '@angular/router'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import 'zone.js'
import { ToolbarStateService } from './core/services'
import {
  FooterComponent,
  LanguageMenuComponent,
  NavbarComponent,
} from './shared/components'
import { LinkComponent } from './shared/components/link/link.component'

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient)
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NgIf,
    NgOptimizedImage,
    MatSidenavModule,
    LanguageMenuComponent,
    LinkComponent,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
