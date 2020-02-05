import { Currency } from './../_class/currency';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrencyList() : any {
    return this.http.get(environment.currencyListUrl);
  }

  getExchangeRates(baseCurrency: string) : any {
    // Get exchange rates with base currecy from baseCurrency parameter
    return this.http.get<any>(environment.exchangeRateUrl + '/latest', { params : { base : baseCurrency } })
    .pipe(
      //Change the response to the exchange rate list
      map(response => response.rates),
      map(exchangeRates => {
        var result: Currency[] = [];
        //Get full name of the currency
        this.getCurrencyList().subscribe(currencyList => {
          for (let currency in exchangeRates) {
            // Change each currency result to Currency Object
            result.push(new Currency(currency, currencyList[currency], exchangeRates[currency], baseCurrency))
          }
          // Sort Result by Name
          result.sort((first, second) => {return first.compareName(second)});
        })
        return result;
      })
    )
  }
}
