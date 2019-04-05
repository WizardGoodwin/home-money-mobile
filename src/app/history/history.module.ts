import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
