import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CategoriesService } from '../../../shared/services/categories.service';
import { Category } from '../../../shared/models/category.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss'],
})
export class NewCategoryPage implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }
    const category = new Category(name, capacity);

    this.loadingCtrl
      .create({
        message: 'Creating category...'
      })
      .then(loadingEl => {
        loadingEl.present();
        this.sub = this.categoriesService.addCategory(category)
          .subscribe(() => {
            loadingEl.dismiss();
            form.reset();
            this.router.navigate(['/records/tabs/categories']);
          });
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
