import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

import { environment } from '../../environments/environment';
import { SerieDetail } from './serieDetail';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getSeries(): Observable<SerieDetail[]> {
  return this.http.get<SerieDetail[]>(this.apiUrl);
}

getSerie(id:String): Observable<SerieDetail>{
  return this.http.get<SerieDetail>(this.apiUrl + '/'+id);
}
}
