import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SpinnerComponent } from '../../components'

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {}
