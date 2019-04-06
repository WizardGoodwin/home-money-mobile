import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Record } from '../../shared/models/record.model';
import { Category } from '../../shared/models/category.model';
import { RecordsService } from '../../shared/services/records.service';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.page.html',
  styleUrls: ['./record-detail.page.scss'],
})
export class RecordDetailPage implements OnInit, OnDestroy {

  record: Record;
  category: Category;

  isLoaded = false;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params
      .pipe(mergeMap((params: Params) => this.recordsService.getRecordById(params['recordId'])))
      .pipe(mergeMap((record: Record) => {
        this.record = record;
        return this.categoriesService.getCategoryById(record.category);
      }))
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
