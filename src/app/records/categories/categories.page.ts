import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Category[] = [];
  isLoaded = false;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true;
      });
  }

  onEdit(categoryId: number, slidingItem: IonItemSliding) {
    this.router.navigate(['/', 'records', 'tabs', 'categories', 'edit', categoryId]);
    slidingItem.close();
  }

  onDelete(categoryId: number, slidingItem: IonItemSliding) {
    this.alertCtrl
      .create({
        header: 'Delete category',
        message: 'Are you sure want to delete this category?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.categoriesService.deleteCategory(categoryId)
                .subscribe(() => {
                  slidingItem.close();
                  console.log(this.categories);
                  this.categories = this.categories.filter(category => {
                    return category.id !== categoryId
                  });

                });
            }
          },
          {
            text: 'No',
            handler: () => {
              slidingItem.close();
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
