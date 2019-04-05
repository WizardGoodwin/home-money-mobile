import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsPage } from './records.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RecordsPage,
    children: [
      {
        path: 'new-record',
        loadChildren: './new-record/new-record.module#NewRecordPageModule'
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: './categories/categories.module#CategoriesPageModule'
          },
          {
            path: 'new',
            loadChildren: './categories/new-category/new-category.module#NewCategoryPageModule'
          },
          {
            path: 'edit/:categoryId',
            loadChildren: './categories/edit-category/edit-category.module#EditCategoryPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: '/records/tabs/new-record',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/records/tabs/new-record',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule {}