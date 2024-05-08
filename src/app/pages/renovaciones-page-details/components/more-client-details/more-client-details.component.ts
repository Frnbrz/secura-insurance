import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-more-client-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-client-details.component.html',
  styleUrls: ['./more-client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreClientDetailsComponent {}
