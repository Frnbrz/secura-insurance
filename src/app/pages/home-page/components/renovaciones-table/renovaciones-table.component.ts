import { JsonPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
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
export class RenovacionesTableComponent implements OnInit {
  @Input() isOnHomePage = false
  renovaciones: RenovacionesInterface[] | [] = []

  displayedColumns: string[] = [
    'nPolicy',
    'riskName',
    'contractDate',
    'expirationDate',
    'amount',
    'state',
  ]

  ngOnInit() {
    if (this.isOnHomePage) {
      console.log(LISTADO_RENOVACIONES.slice(-3))
      this.renovaciones = LISTADO_RENOVACIONES.slice(-3)
    } else {
      this.renovaciones = LISTADO_RENOVACIONES
    }
  }
}
