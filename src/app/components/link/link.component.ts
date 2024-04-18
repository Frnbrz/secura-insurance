import { Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() to = '#'
}
