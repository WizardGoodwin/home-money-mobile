import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage,
  },
  {
    path: 'record-detail/:recordId',
    loadChildren: './record-detail/record-detail.module#RecordDetailPageModule'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {}