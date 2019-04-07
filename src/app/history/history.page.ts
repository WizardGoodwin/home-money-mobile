import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';

import { Category } from '../shared/models/category.model';
import { Record } from '../shared/models/record.model';
import { CategoriesService } from '../shared/services/categories.service';
import { RecordsService } from '../shared/services/records.service';
import { HistoryFilterComponent } from './history-filter/history-filter.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit, OnDestroy {

  isLoaded = false;
  sub: Subscription;

  categories: Category[] = [];
  records: Record[] = [];
  filteredRecords: Record[] = [];

  chartData = [];

  constructor(
    private categoriesService: CategoriesService,
    private recordsService: RecordsService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.sub = combineLatest(
      this.categoriesService.getCategories(),
      this.recordsService.getRecords()
    ).subscribe((data: [Category[], Record[]]) => {
      this.categories = data[0];
      this.records = data[1];

      this.records.forEach((record) => {
        record.catName = this.categories.find(category => category.id === record.category).name;
      });

      this.setOriginalRecords();
      this.calculateChartData();

      this.isLoaded = true;
    });
  }

  private setOriginalRecords() {
    this.filteredRecords = this.records.slice();
  }

  calculateChartData(): void {
    this.chartData = [];
    this.categories.forEach(category => {
      const catRecord = this.filteredRecords
        .filter(record => {
          return record.category === category.id && record.type === 'outcome'
        });
      this.chartData.push({
        name: category.name,
        value: catRecord.reduce((total, record) => {
          total += record.amount;
          return total;
        }, 0)
      });
    });
  }

  openFilter() {
    this.modalCtrl
      .create({
        component: HistoryFilterComponent,
        componentProps: { categories: this.categories }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(filterData => {
        if (filterData.role === 'confirm') {
          this.onFilterApply(filterData.data);
        } else {
          this.onFilterCancel();
        }
      });
  }

  onFilterApply(filterData) {
    this.setOriginalRecords();

    const startPeriod = moment().startOf(filterData.period).startOf('d');
    const endPeriod = moment().endOf(filterData.period).endOf('d');

    this.filteredRecords = this.filteredRecords
      .filter(e => {
        return filterData.types.indexOf(e.type) !== -1;
      })
      .filter(e => {
        return filterData.categories.indexOf(e.category.toString()) !== -1;
      })
      .filter(e => {
        const momentDate = moment(e.date, 'DD.MM.YYYY HH:mm:ss');

        return momentDate.isBetween(startPeriod, endPeriod);
      });

    this.calculateChartData();
  }

  onFilterCancel() {
    this.setOriginalRecords();
    this.calculateChartData();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
