import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { SerieDetail } from '../serieDetail';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  serieid!:string;
  @Input() serieDetail!: SerieDetail; 

  constructor(private route: ActivatedRoute ,private seriesService: SeriesService) { }

  getSerie(){
    this.seriesService.getSerie(this.serieid).subscribe(apiData=>{
      this.serieDetail = apiData;
    })
  }

  ngOnInit() {
    if (this.serieDetail == undefined){
      this.serieid = this.route.snapshot.paramMap.get('id')!
      if (this.serieid) {
        this.getSerie();
      }
    }
    console.log('Datos del serieDetail:', this.serieDetail);
  }


}
