import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-status-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-flag.component.html',
  styleUrls: ['./status-flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusFlagComponent {
  @Input() status = 'vencido'
}
