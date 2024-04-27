import { NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SpinnerService } from '@src/app/core/services'

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule, NgIf],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SpinnerComponent {
  private readonly spinnerService = inject(SpinnerService)
  isLoading = this.spinnerService.isLoading
}
