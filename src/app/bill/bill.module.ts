import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BillPage } from './bill.page';
import { BillRoutingModule } from './bill-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BillRoutingModule,
  ],
  declarations: [BillPage]
})
export class BillPageModule {}
