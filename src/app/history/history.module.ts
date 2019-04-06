import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryRecordsComponent } from './history-records/history-records.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { HistoryFilterComponent } from './history-filter/history-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryPage, HistoryRecordsComponent, HistoryFilterComponent, FilterPipe],
  entryComponents: [HistoryFilterComponent]
})
export class HistoryPageModule {}
