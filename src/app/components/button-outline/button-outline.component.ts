import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-button-outline',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonOutlineComponent {
  @Input() disabled = false
}
