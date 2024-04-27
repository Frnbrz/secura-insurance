import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContainerComponent {}
