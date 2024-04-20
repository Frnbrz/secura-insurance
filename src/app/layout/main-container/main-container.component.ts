import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {}
