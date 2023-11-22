import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';
import { SerieDetail } from '../serieDetail';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  constructor(private serieService: SeriesService) { }

  series: Array<Serie> = [];
  promedio:number=0;
  selectedSerie!: SerieDetail;
  selected: boolean = false;

  getSeries(){
    
    this.serieService.getSeries().subscribe(apiData =>{
      this.series=apiData;
      this.promedio=this.average(apiData);
    })
  }

  average(series: Serie[]):number{
    let promedio:number=0
    for (let index=0; index<series.length;index++){
      let serie: Serie= series[index];
      promedio+=serie.seasons;
    }
    return promedio/series.length;
  }

  onSelected(serie: SerieDetail): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
