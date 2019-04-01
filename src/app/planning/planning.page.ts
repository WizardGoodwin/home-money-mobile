import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { Bill } from '../shared/models/bill.model';
import { Category } from '../shared/models/category.model';
import { Record } from '../shared/models/record.model';
import { BillService } from '../shared/services/bill.service';
import { CategoriesService } from '../shared/services/categories.service';
import { RecordsService } from '../shared/services/records.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit, OnDestroy {
  isLoaded = false;
  sub: Subscription;

  bill: Bill;
  categories: Category[] = [];
  records: Record[] = [];

  constructor(
    private billService: BillService,
    private categoriesService: CategoriesService,
    private recordsService: RecordsService
  ) { }

  ngOnInit() {
    this.sub = combineLatest(
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.recordsService.getRecords()
    ).subscribe((data: [Bill, Category[], Record[]]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.records = data[2];

      this.isLoaded = true;
    });
  }

  getCategoryCost(category: Category): number {
    const catRecords = this.records.filter(e => e.category === category.id && e.type === 'outcome');
    return catRecords.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }

  private getPercent(category: Category): number {
    const percent = (100 * this.getCategoryCost(category)) / category.capacity;
    return percent > 100 ? 100 : percent;
  }

  getCatPercent(category: Category): string {
    return this.getPercent(category) + '%';
  }

  getCatColorClass(category: Category): string {
    const percent = this.getPercent(category);
    return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
