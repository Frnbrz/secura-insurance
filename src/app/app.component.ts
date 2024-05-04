import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import 'zone.js'
import {
  FooterComponent,
  NavbarComponent,
  SidenavComponent,
} from './shared/components'

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient)
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
