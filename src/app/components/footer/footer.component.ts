import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatDividerModule } from '@angular/material/divider'
import { LinkComponent } from '../link/link.component'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatDividerModule, LinkComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
