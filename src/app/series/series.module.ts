import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './series-listar/series-listar.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListarComponent, SeriesDetailComponent],
  exports: [SeriesListarComponent, SeriesDetailComponent]
})
export class SeriesModule { }
