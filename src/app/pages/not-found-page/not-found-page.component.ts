import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LinkComponent } from '@src/app/shared/components/'
import { MainContainerComponent } from '@src/app/shared/layout'

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [MainContainerComponent, LinkComponent],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
