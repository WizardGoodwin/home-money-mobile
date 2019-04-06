import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../shared/models/category.model';
import { Record } from '../../shared/models/record.model';

@Component({
  selector: 'app-history-records',
  templateUrl: './history-records.component.html',
  styleUrls: ['./history-records.component.scss'],
})
export class HistoryRecordsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() records: Record[] = [];
  @Input() isLoaded: boolean = false;
  searchValue = '';
  searchPlaceholder = 'Amount';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
  }

  changeCriteria(event) {
    const field = event.target.value;
    const namesMap = {
      amount: 'Amount',
      date: 'Date',
      category: 'Category',
      type: 'Type',
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

}
