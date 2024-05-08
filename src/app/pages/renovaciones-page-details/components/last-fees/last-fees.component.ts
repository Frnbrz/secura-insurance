import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-last-fees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-fees.component.html',
  styleUrls: ['./last-fees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastFeesComponent {}
