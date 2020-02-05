import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputComponent } from './currency-input.component';
import { Currency } from '../_class/currency';

describe('CurrencyInputComponent', () => {
  let component: CurrencyInputComponent;
  let fixture: ComponentFixture<CurrencyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyInputComponent ],
      imports: [
        FormsModule,
        MatIconModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInputComponent);
    component = fixture.componentInstance;
    component.selectedCurrency = new Currency("USD", "United States Dollar", 1, "USD");
    component.isInput = false;
    component.dropdownList = [new Currency("USD", "United States Dollar", 1, "USD")];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
