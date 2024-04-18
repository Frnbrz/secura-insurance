import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LinkComponent } from '@src/app/components/link/link.component'
import { MainContainerComponent } from '@src/app/layout'

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [MainContainerComponent, LinkComponent],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
