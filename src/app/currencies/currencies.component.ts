import { Currency } from './../_class/currency';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent {
  @Input() currency: Currency;
  @Input() index: number;
  @Input() amount: number;
  @Output() remove: EventEmitter<number> = new EventEmitter();
}
