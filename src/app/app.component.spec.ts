import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './_services/api.service';
import { FormsModule } from '@angular/forms';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule
      ],
      declarations: [
        AppComponent,
        CurrenciesComponent,
        CurrencyInputComponent
      ],
      providers: [ApiService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have baseCurrency 'USD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.baseCurrency).toEqual('USD');
  });
});
