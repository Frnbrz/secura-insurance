import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = signal<boolean>(false)
  private count = 0

  public hide() {
    this.count--
    if (this.count === 0) {
      this.isLoading.set(false)
    }
  }
  public show() {
    this.count++
    if (this.count === 1) {
      this.isLoading.set(true)
    }
  }
}
