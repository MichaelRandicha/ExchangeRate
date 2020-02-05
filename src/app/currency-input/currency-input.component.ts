import { Currency } from './../_class/currency';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent {
  @Input() selectedCurrency: string;
  @Input() isInput: boolean;
  @Input() dropdownList: Currency[];

  @Output() showDropdown = new EventEmitter();
  @Output() addCurrency: EventEmitter<string> = new EventEmitter();
}
