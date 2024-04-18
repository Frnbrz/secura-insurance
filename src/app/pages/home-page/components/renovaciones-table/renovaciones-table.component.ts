import { Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
@Component({
  selector: 'app-renovaciones-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './renovaciones-table.component.html',
  styleUrls: ['./renovaciones-table.component.scss'],
})
export class RenovacionesTableComponent {
  displayedColumns: string[] = [
    '$implicit',
    'index',
    'count',
    'first',
    'last',
    'even',
    'odd',
  ]
  data: string[] = ['one', 'two', 'three', 'four', 'five']
}
