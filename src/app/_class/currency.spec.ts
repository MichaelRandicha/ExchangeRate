import { Currency } from './currency';

describe('Currency', () => {
  it('should create an instance', () => {
    expect(new Currency("USD", "United States Dollar", 1, "USD")).toBeTruthy();
  });
});
