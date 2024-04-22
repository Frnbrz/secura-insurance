import { JsonPipe, NgClass } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

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
    NgClass,
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
      this.dataSource = new MatTableDataSource<RenovacionesInterface>(
        LISTADO_RENOVACIONES.slice(-3)
      )

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
