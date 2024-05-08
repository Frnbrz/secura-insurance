import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent {
  actualizarDetalle() {
    console.log('actualizarDetalle')
  }
}
