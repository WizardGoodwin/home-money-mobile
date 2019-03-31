import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as moment from 'moment';

import { RecordsService } from '../../shared/services/records.service';
import { BillService } from '../../shared/services/bill.service';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { Record } from '../../shared/models/record.model';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.page.html',
  styleUrls: ['./new-record.page.scss'],
})
export class NewRecordPage implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;

  categories: Category[] = [];

  constructor(
    private billService: BillService,
    private categoriesService: CategoriesService,
    private recordsService: RecordsService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  onSubmit(form: NgForm) {
    let {amount, description, category, type} = form.value;
    if (amount < 0) {
      amount *= -1;
    }

    const record = new Record(
      type, amount, +category,
      moment().format('DD.MM.YYYY HH:mm:ss'), description
    );

    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.alertCtrl
              .create({
                header: 'Error!',
                message: `There are not enough funds. You are lacking ${amount - bill.value}`,
                buttons: ['Ok']
              })
              .then(alertEl => {
                alertEl.present();
              });

          } else {
            value = bill.value - amount;
          }
        } else {
          value = bill.value + amount;
        }

        this.sub2 = this.billService.updateBill({value, currency: bill.currency})
          .pipe(mergeMap(() => this.recordsService.addRecord(record)))
          .subscribe(() => {
            this.alertCtrl
              .create({
                header: 'Success!',
                message: 'Record successfully created',
                buttons: ['Ok']
              })
              .then(alertEl => {
                alertEl.present();
              });
            form.reset();
          });
      });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
