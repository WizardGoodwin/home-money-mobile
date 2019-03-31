import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bill', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  {
    path: 'bill',
    loadChildren: './bill/bill.module#BillPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: './history/history.module#HistoryPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'planning',
    loadChildren: './planning/planning.module#PlanningPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'records',
    loadChildren: './records/records.module#RecordsPageModule',
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
