import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() to = '#'
}
