import { JsonPipe, NgIf, NgStyle } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { CurrencyEuroPipe } from '@src/app/pipes'
import { DateEuroPipe } from '@src/app/pipes/date-euro.pipe'
import {
  LISTADO_RENOVACIONES,
  RenovacionesInterface,
} from '@src/core/data/listado_renovaciones'
import { StatusFlagComponent } from '../status-flag/status-flag.component'

@Component({
  selector: 'app-renovaciones-table',
  standalone: true,
  imports: [
    MatTableModule,
    JsonPipe,
    StatusFlagComponent,
    MatPaginatorModule,
    NgIf,
    NgStyle,
    CurrencyEuroPipe,
    DateEuroPipe,
  ],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesTableComponent implements AfterViewInit {
  @Input() isOnHomePage = false
  dataSource:
    | MatTableDataSource<RenovacionesInterface>
    | RenovacionesInterface[] = []

  @ViewChild(MatPaginator) paginator!: MatPaginator | null

  ngAfterViewInit() {
    if (this.isOnHomePage) {
      this.dataSource = LISTADO_RENOVACIONES.slice(-3)
      console.log(this.dataSource)
      // this.renovaciones = LISTADO_RENOVACIONES.slice(-3)
    } else {
      // this.renovaciones = LISTADO_RENOVACIONES
      this.dataSource = new MatTableDataSource<RenovacionesInterface>(
        LISTADO_RENOVACIONES
      )
      this.dataSource.paginator = this.paginator
    }
  }

  displayedColumns: string[] = [
    'nPolicy',
    'riskName',
    'contractDate',
    'expirationDate',
    'amount',
    'state',
  ]
}
