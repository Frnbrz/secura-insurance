import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TableFiltersService {
  private filter = new BehaviorSubject<any>(null)

  filter$ = this.filter.asObservable()

  setFilter(value: any) {
    this.filter.next(value)
  }
}
