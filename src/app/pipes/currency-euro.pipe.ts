import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'currencyEuro',
  standalone: true,
})
export class CurrencyEuroPipe implements PipeTransform {
  transform(value: number, _args?: unknown): string {
    // Format the value as currency for Euro
    const formattedValue = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)

    return formattedValue
  }
}
