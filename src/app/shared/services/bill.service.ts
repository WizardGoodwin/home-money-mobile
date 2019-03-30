import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Bill } from '../models/bill.model';
import { BaseApi } from '../base-api';


@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseApi{
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<any> {
    return this.get('bill');
  }

  getCurrency(base: string = 'EUR'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=d7873adf726be0f23a66ac3153ac9e21`)
      .pipe(map(response => response));
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }
}
