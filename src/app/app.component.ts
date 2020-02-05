import { Currency } from './_class/currency';
import { ApiService } from './_services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  selectedCurrency = '';
  amount = 10;
  baseCurrency = "USD";
  isInput = false;

  currencyList = [];
  exchangeRates: Currency[] = [];
  
  constructor(private apiService: ApiService){ }
  
  ngOnInit() {
    this.apiService.getExchangeRates(this.baseCurrency)
      .subscribe(exchangeRates => this.exchangeRates = exchangeRates)
  }

  get dropdownList(){
    return this.exchangeRates
      .map(rate => rate.name)
      .filter(name => 
        !this.currencyList.map(currency => currency.name).includes(name)
      );
  }

  get exchangeRateEmpty(){
    return this.exchangeRates.length == 0;
  } 

  changeCurrencyList() {
    this.currencyList = this.currencyList.map(currency => {
      return this.searchCurrency(currency.name);
    })
  }

  searchCurrency(currency: string) : Currency {
    return this.exchangeRates.find(currencies => currencies.name == currency);
  }

  showDropdown() {
    if(this.dropdownList.length > 0) {
      this.isInput = true;
      this.selectedCurrency = this.dropdownList[0];
    }
  }

  hideDropdown() {
    this.isInput = false;
  }

  addCurrency(currency: string) {
    if(this.dropdownList.includes(currency)){
      this.currencyList.push(this.searchCurrency(currency));
    }
    this.hideDropdown();
  }

  removeCurrency(index: number) {
    this.currencyList.splice(index, 1);
  }
}

