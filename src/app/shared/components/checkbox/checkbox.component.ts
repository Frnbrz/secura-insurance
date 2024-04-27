import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core'
import { MatCheckboxModule } from '@angular/material/checkbox'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {}
