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
  private isNavSidenav = signal(true)
  public sideNavToggleSubject: BehaviorSubject<null> = new BehaviorSubject(null)

  public getIsNavSidenav() {
    return this.isNavSidenav
  }

  public setIsNavSidenav(isNavSidenav: boolean) {
    this.isNavSidenav.set(isNavSidenav)
  }

  public toggle(sidenavFilter?: boolean) {
    if (sidenavFilter) {
      this.isNavSidenav.set(false)
    } else {
      this.isNavSidenav.set(true)
    }
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
