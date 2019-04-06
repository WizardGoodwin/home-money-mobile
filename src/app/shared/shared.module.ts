import { NgModule } from '@angular/core';
import { MomentPipe } from './pipes/moment.pipe';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [MomentPipe],
  //imports: [NgxChartsModule],
  exports: [MomentPipe]
})
export class SharedModule {}
