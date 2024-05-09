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
import { ClientesService } from '@src/app/core/services'
import { SectionContainerComponent } from '@src/app/shared/layout'
import { ClientePotencialInterface } from '@src/app/shared/models'

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
        this.cdr.detectChanges() // Detect changes manually
      })
  }
  removeClientePotencial(clientePotencial: ClientePotencialInterface) {
    this.clientesPotenciales = this.clientesPotenciales.filter(
      cliente => cliente !== clientePotencial
    )
  }
}
