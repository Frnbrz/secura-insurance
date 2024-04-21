import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { ClientePotencialInterface } from '@src/core/data/clientes_potenciales'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() ClienteElement: ClientePotencialInterface = {
    offerProduct: 'Seguro de vida',
    personalData: {
      name: 'Juan',
      surname: 'Pérez',
      email: 'email&#64;example.com',
      phone: '+1234567890',
    },
  }
}
