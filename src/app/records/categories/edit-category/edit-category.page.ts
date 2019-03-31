import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { CategoriesService } from '../../../shared/services/categories.service';
import { Category } from '../../../shared/models/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit, OnDestroy {
  category: Category;
  categoryId: string;
  isLoading = false;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('categoryId')) {
        this.navCtrl.navigateBack('/records/tabs/categories');
        return;
      }
      this.categoryId = paramMap.get('categoryId');
      this.isLoading = true;
      this.sub = this.categoriesService
        .getCategoryById(+this.categoryId)
        .subscribe(
          category => {
            this.category = category;
            this.isLoading = false;
          },
          error => {
            this.alertCtrl
              .create({
                header: 'An error occurred!',
                message: 'Category could not be fetched. Please try again later.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/records/tabs/categories']);
                    }
                  }
                ]
              })
              .then(alertEl => {
                alertEl.present();
              });
          }
        );
    });
  }

  onUpdateCategory(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }
    const category = new Category(name, capacity, +this.categoryId);

    this.loadingCtrl
      .create({
        message: 'Updating place...'
      })
      .then(loadingEl => {
        loadingEl.present();
        this.categoriesService.updateCategory(category)
          .subscribe(() => {
            loadingEl.dismiss();
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
