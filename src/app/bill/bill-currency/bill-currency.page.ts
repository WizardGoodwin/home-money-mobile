import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BillService } from '../../shared/services/bill.service';

@Component({
  selector: 'app-bill-currency',
  templateUrl: './bill-currency.page.html',
  styleUrls: ['./bill-currency.page.scss'],
})
export class BillCurrencyPage implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;

  currency: any;
  currencies: string[] = ['EUR', 'USD', 'JPY'];
  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.sub1 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }

  onRefresh() {
    console.log('fefew');
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
