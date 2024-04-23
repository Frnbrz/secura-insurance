import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { SectionContainerComponent } from '@src/app/layout/section-container/section-container.component'
import {
  CLIENTES_POTENCIALES,
  ClientePotencialInterface,
} from '@src/core/data/clientes_potenciales'

@Component({
  selector: 'app-clientes-potenciales',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, SectionContainerComponent],
  templateUrl: './clientes-potenciales.component.html',
  styleUrls: ['./clientes-potenciales.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientesPotencialesComponent {
  clientesPotenciales: ClientePotencialInterface[] = CLIENTES_POTENCIALES

  removeClientePotencial(clientePotencial: ClientePotencialInterface) {
    this.clientesPotenciales = this.clientesPotenciales.filter(
      cliente => cliente !== clientePotencial
    )
  }
}
