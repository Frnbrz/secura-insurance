import { Injectable, signal } from '@angular/core'

export const EmptyToolbarState = false

@Injectable({
  providedIn: 'root',
})
export class ToolbarStateService {
  private toolbarState = signal(EmptyToolbarState)

  getToolbarState() {
    return this.toolbarState
  }

  setToolbarState(state: boolean) {
    this.toolbarState.set(state)
  }
}
