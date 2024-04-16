import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() id = ''
  @Input() css: InputType['css'] = 'input-primary'
  @Input() placeholder?: string | undefined
  @Input() value?: string | number | undefined
  @Input() customErrorMessages: Record<string, string> = {}
  @Input() name!: string
}
