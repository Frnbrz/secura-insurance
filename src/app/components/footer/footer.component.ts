import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatDividerModule } from '@angular/material/divider'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
