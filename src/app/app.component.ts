import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ButtonComponent } from './components'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'secura-insurance'
}
