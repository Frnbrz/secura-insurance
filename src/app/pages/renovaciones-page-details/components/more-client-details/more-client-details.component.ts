import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-more-client-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './more-client-details.component.html',
  styleUrls: ['./more-client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreClientDetailsComponent {
  actualizarDetalle() {
    throw new Error('Method not implemented.')
  }
}
