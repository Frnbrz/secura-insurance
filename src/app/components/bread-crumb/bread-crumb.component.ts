import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router' // Import ActivatedRoute

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadCrumbComponent implements OnInit {
  route = inject(ActivatedRoute)
  currentRoute: string | null = null

  ngOnInit() {
    this.currentRoute = this.route?.snapshot?.routeConfig?.path ?? null
  }
}
