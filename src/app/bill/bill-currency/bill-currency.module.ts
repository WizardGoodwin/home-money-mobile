import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillCurrencyPage } from './bill-currency.page';

const routes: Routes = [
  {
    path: '',
    component: BillCurrencyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillCurrencyPage]
})
export class BillCurrencyPageModule {}
