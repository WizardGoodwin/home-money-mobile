import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../base-api';
import { Record } from '../models/record.model';


@Injectable()
export class RecordsService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addRecord(record: Record): Observable<Record> {
    return this.post('records', record);
  }

  getRecords(): Observable<Record[]> {
    return this.get('records');
  }

  getRecordById(id: string):Observable<Record> {
    return this.get(`records/${id}`);
  }
}
