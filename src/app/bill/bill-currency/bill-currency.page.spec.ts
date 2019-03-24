import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCurrencyPage } from './bill-currency.page';

describe('BillCurrencyPage', () => {
  let component: BillCurrencyPage;
  let fixture: ComponentFixture<BillCurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCurrencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
