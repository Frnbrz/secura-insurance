import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router' // Import ActivatedRoute
import { RenovacionesService } from '@src/app/core/services'

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadCrumbComponent implements OnInit {
  renovacionesService = inject(RenovacionesService)
  polizas = this.renovacionesService.getTotalRenovaciones()
  route = inject(ActivatedRoute)
  currentRoute: string | null = null

  ngOnInit() {
    this.currentRoute = this.route?.snapshot?.routeConfig?.path ?? null
  }
}
