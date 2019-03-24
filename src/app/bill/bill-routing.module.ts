import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillPage } from './bill.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BillPage,
    children: [
      {
        path: 'bill-card',
        loadChildren: './bill-card/bill-card.module#BillCardPageModule'
      },
      {
        path: 'bill-currency',
        loadChildren: './bill-currency/bill-currency.module#BillCurrencyPageModule'
      },
      {
        path: '',
        redirectTo: '/bill/tabs/bill-card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/bill/tabs/bill-card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule {}