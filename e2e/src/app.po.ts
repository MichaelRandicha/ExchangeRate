import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root #title')).getText() as Promise<string>;
  }

  getSubTitleText() {
    return element(by.css('app-root #subtitle')).getText() as Promise<string>;
  }

  getAmountInput() {
    return element(by.css('app-root #amount')).getAttribute("value") as Promise<string>;
  }

  getFirstCurrency() {
    return element(by.css('app-root .currency:first-child > mat-card-title:first-child')).getText() as Promise<string>;
  }

  getFirstCurrencyRate() {
    return element(by.css('app-root .currency:first-child > mat-card-content')).getText()
    .then(function(text) {
      //Return Exchange Rate for this Currency
      return parseInt(text.split(" ")[3]);
    }) as Promise<number>;
  }

  getFirstCurrencyTotalRate() {
    return element(by.css('app-root .currency:first-child > mat-card-title:nth-child(2)')).getText()
    .then(function(text) {
      return parseInt(text);
    }) as Promise<number>;
  }

  getCurrencyAmount() {
    return element.all(by.css('app-root .currency')).count() as Promise<number>;
  }

  addCurrency() {
    element(by.css('app-root #showDropdown')).click();
    element(by.css('app-root #addCurrency')).click();
  }

  addCurrencyWithInput(input: string) {
    element(by.css('app-root #showDropdown')).click();
    element(by.css('app-root select')).sendKeys(input);
    element(by.css('app-root #addCurrency')).click();
  }

  setInputAmount(input: number){
    element(by.css('app-root #amount')).clear();
    element(by.css('app-root #amount')).sendKeys(input);
  }

  removeCurrency() {
    var button = element.all(by.css('app-root .currency > button')).first();
    browser.actions().mouseMove(button).click().perform();
  }
}
