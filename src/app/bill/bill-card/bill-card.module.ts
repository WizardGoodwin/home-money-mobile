import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillCardPage } from './bill-card.page';

const routes: Routes = [
  {
    path: '',
    component: BillCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillCardPage]
})
export class BillCardPageModule {}
