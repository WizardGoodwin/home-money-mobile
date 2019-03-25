import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecordsPage } from './records.page';
import { RecordsRoutingModule } from './records-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsRoutingModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
