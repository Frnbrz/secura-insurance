import { NgClass } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'
import { ToolbarStateService } from '@src/app/services/toolbar-state.service'

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [MatButtonModule, RouterModule, NgClass],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  toolbarStateService = inject(ToolbarStateService)
  @Input() to = '#'
  @Input() active = false

  setRoute() {
    this.toolbarStateService.setRoute(this.to)
  }
}
