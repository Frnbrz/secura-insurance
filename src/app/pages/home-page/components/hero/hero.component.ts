import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
