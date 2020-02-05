import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let amount: number = 33;
  let firstCurrency: string = 'AUD';
  let amountAfter: number = 15;
  let removeAmount: number = 13;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it(`Title should be 'USD - United States Dollar'`, () => {
    expect(page.getTitleText()).toEqual('USD - United States Dollar');
  });

  it(`Subtitle should be 'USD'`, () => {
    expect(page.getSubTitleText()).toEqual('USD');
  });

  it(`Amount should be '10'`, () => {
    expect(page.getAmountInput()).toEqual('10');
  });

  it(`Should add '`+ amount +`' new currency`, () => {
    for (let index = 0; index < amount; index++) {
      page.addCurrency();
    }
    expect(page.getCurrencyAmount()).toEqual(amount);
  })

  it(`Should add '`+ amount +`' new currency and remove '` + removeAmount + `' currency, total of '` + (amount-removeAmount) + `' left`, () => {
    for (let index = 0; index < amount; index++) {
      page.addCurrency();
    }
    for (let index = 0; index < removeAmount; index++) {
      page.removeCurrency();
    }
    expect(page.getCurrencyAmount()).toEqual(amount - removeAmount);
  })

  it(`First currency should be '` + firstCurrency + `'`, () => {
    page.addCurrency();
    expect(page.getFirstCurrency()).toEqual(firstCurrency);
  })

  it('Currency total rate should changed based on the amount, and equal : rate * amountAfter', () => {
    page.addCurrencyWithInput("USD");
    page.setInputAmount(amountAfter);
    page.getFirstCurrencyRate().then(value => {
      expect(page.getFirstCurrencyTotalRate()).toEqual(value * amountAfter);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
