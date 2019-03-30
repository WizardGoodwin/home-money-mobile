import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { Bill } from '../../shared/models/bill.model';
import { BillService } from '../../shared/services/bill.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.page.html',
  styleUrls: ['./bill-card.page.scss'],
})
export class BillCardPage implements OnInit, OnDestroy {
  sub: Subscription;

  euro: number;
  dollar: number;
  yen: number;
  isLoaded = false;


  constructor(private billService: BillService) { }

  ngOnInit() {
    this.sub = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency(),
    ).subscribe((data: [Bill, any]) => {
      this.euro = data[0].value;
      const rates = data[1].rates;

      this.dollar = rates['USD'] * this.euro;
      this.yen = rates['JPY'] * this.euro;
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
