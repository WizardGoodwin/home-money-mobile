import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillCurrencyPage } from './bill-currency.page';
import { MomentPipe } from '../../shared/pipes/moment.pipe';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

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
  declarations: [BillCurrencyPage, MomentPipe, LoaderComponent]
})
export class BillCurrencyPageModule {}
