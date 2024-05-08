import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-bread-crumb-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bread-crumb-details.component.html',
  styleUrls: ['./bread-crumb-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadCrumbDetailsComponent implements OnInit {
  currentRoute: string | null = null
  route = inject(ActivatedRoute)

  ngOnInit() {
    this.currentRoute = this.route.snapshot.paramMap.get('id') ?? null
  }
}
