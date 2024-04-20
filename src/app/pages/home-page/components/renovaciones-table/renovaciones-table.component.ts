import { JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import {
  LISTADO_RENOVACIONES,
  RenovacionesInterface,
} from '@src/core/data/listado_renovaciones'
import { StatusFlagComponent } from '../status-flag/status-flag.component'
@Component({
  selector: 'app-renovaciones-table',
  standalone: true,
  imports: [MatTableModule, JsonPipe, StatusFlagComponent],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent {
  renovaciones: RenovacionesInterface[] = LISTADO_RENOVACIONES

  displayedColumns: string[] = [
    'nPolicy',
    'riskName',
    'contractDate',
    'expirationDate',
    'amount',
    'state',
  ]

  ngOnInit() {
    console.log(this.renovaciones)
  }
}
