import { NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() className = 'primary'
  @Input() type: 'primary' | 'outline' = 'primary'
}
