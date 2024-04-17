import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MainContainerComponent } from '@src/app/layout'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
