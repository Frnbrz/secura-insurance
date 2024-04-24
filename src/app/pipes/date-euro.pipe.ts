import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'dateEuro',
  standalone: true,
})
export class DateEuroPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const dateValue = new Date(value) // Convert value to a Date object
    const day = dateValue.getDate().toString().padStart(2, '0')
    const month = (dateValue.getMonth() + 1).toString().padStart(2, '0')
    const year = dateValue.getFullYear().toString()
    return `${day}/${month}/${year}`
  }
}
