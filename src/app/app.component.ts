import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent, NavbarComponent } from './components'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'secura-insurance'
}
