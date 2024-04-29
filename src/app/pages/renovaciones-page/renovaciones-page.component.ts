import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BreadCrumbComponent } from '@src/app/shared/components'
import { MainContainerComponent } from '@src/app/shared/layout'
import { RenovacionesTableComponent } from '../home-page/components/renovaciones-table/renovaciones-table.component'
import { RenovacionesTableHeaderComponent } from './components/renovaciones-table-header/renovaciones-table-header.component'

@Component({
  selector: 'app-renovaciones-page',
  standalone: true,
  imports: [
    MainContainerComponent,
    RenovacionesTableComponent,
    BreadCrumbComponent,
    RenovacionesTableHeaderComponent,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './renovaciones-page.component.html',
  styleUrls: ['./renovaciones-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenovacionesPageComponent {
  clickMenu() {
    console.log('clickMenu')
  }
}
