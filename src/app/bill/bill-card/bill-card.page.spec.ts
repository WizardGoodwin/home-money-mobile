import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCardPage } from './bill-card.page';

describe('BillCardPage', () => {
  let component: BillCardPage;
  let fixture: ComponentFixture<BillCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
