import { Injectable, signal } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export const EmptyToolbarState = false

@Injectable({
  providedIn: 'root',
})
export class ToolbarStateService {
  private toolbarState = signal(EmptyToolbarState)
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null)

  public toggle() {
    return this.sideNavToggleSubject.next(null)
  }

  getToolbarState() {
    return this.toolbarState
  }

  setToolbarState(state: boolean) {
    this.toolbarState.set(state)
  }
}
