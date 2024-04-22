import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SectionContainerComponent } from '@src/app/layout/section-container/section-container.component'
import {
  CLIENTES_POTENCIALES,
  ClientePotencialInterface,
} from '@src/core/data/clientes_potenciales'
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'app-clientes-potenciales',
  standalone: true,
  imports: [CardComponent, NgFor, SectionContainerComponent],
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
