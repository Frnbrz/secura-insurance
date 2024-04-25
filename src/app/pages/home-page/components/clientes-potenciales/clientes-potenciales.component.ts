import { NgFor, NgIf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { SectionContainerComponent } from '@src/app/layout/section-container/section-container.component'
import { ClientesService } from '@src/app/services/clientes.service'
import { ClientePotencialInterface } from '@src/core/data/clientes_potenciales'

@Component({
  selector: 'app-clientes-potenciales',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgFor,
    NgIf,
    SectionContainerComponent,
  ],
  templateUrl: './clientes-potenciales.component.html',
  styleUrls: ['./clientes-potenciales.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientesPotencialesComponent implements OnInit {
  public clientesPotenciales: ClientePotencialInterface[] = []
  clientesService: ClientesService
  destroyRef: DestroyRef
  cdr: ChangeDetectorRef

  constructor() {
    this.clientesPotenciales = []
    this.clientesService = inject(ClientesService)
    this.destroyRef = inject(DestroyRef)
    this.cdr = inject(ChangeDetectorRef)
  }

  ngOnInit(): void {
    this.loadCLientes()
  }

  loadCLientes() {
    this.clientesService
      .getClientes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(clientes => {
        this.clientesPotenciales = clientes
        console.log('clientes', this.clientesPotenciales.length)
        this.cdr.detectChanges() // Detect changes manually
      })
  }
  removeClientePotencial(clientePotencial: ClientePotencialInterface) {
    this.clientesPotenciales = this.clientesPotenciales.filter(
      cliente => cliente !== clientePotencial
    )
  }
}
