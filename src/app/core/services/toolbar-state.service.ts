import { Injectable, signal } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export const EmptyToolbarState = false
export const EmptyFilterState = false

@Injectable({
  providedIn: 'root',
})
export class ToolbarStateService {
  private isOpen = false
  private toolbarState = signal(EmptyToolbarState)
  private filterState = signal(EmptyFilterState)
  private route = signal('')
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null)

  public toggle() {
    this.isOpen = !this.isOpen
    return this.sideNavToggleSubject.next(null)
  }

  public getIsOpen() {
    return this.isOpen
  }

  getRoute() {
    return this.route
  }

  setRoute(route: string) {
    this.route.set(route)
  }

  getToolbarState() {
    return this.toolbarState
  }

  setToolbarState(state: boolean) {
    this.toolbarState.set(state)
  }

  getFilterState() {
    return this.filterState
  }

  setFilterState(state: boolean) {
    this.filterState.set(state)
  }
}
