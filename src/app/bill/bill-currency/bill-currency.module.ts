import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillCurrencyPage } from './bill-currency.page';
import { MomentPipe } from '../../shared/pipes/moment.pipe';

const routes: Routes = [
  {
    path: '',
    component: BillCurrencyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillCurrencyPage, MomentPipe]
})
export class BillCurrencyPageModule {}
