import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MainContainerComponent } from '@src/app/layout'
import { ProximasRenovacionesComponent } from './components'
import { ClientesPotencialesComponent } from './components/clientes-potenciales/clientes-potenciales.component'
import { HeroComponent } from './components/hero/hero.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainContainerComponent,
    HeroComponent,
    ProximasRenovacionesComponent,
    ClientesPotencialesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
