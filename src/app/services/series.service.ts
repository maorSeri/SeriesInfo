import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SeriesInfo} from '../models/seriesInfo';
import {SeasonInfo} from '../models/SeasonInfo';
import {EpisodeInfo} from '../models/EpisodeInfo';
import {Episode} from '../models/Episode';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/jason'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  omdbUrl = 'http://www.omdbapi.com/';
  apiKey = '&apikey=f27efbda';
  constructor(private http: HttpClient) { }

  getSeries(seriesName): Observable<SeriesInfo>{
    const url = `${this.omdbUrl}?t=${seriesName}${this.apiKey}`;
    console.log(url);
    return this.http.get<SeriesInfo>(url);

  }


  getSeason(seriesName: string, seriesSeason: string): Observable<SeasonInfo>{
    const url = `${this.omdbUrl}?t=${seriesName}&Season=${seriesSeason}${this.apiKey}`;
    console.log(url);
    return this.http.get<SeasonInfo>(url);
  }

  getEpisode(seriesName: string, seriesSeason: string, episodeNumber: number): Observable<Episode>{
    const url = `${this.omdbUrl}?t=${seriesName}&Season=${seriesSeason}&Episode=${episodeNumber}&plot=full${this.apiKey}`;
    console.log(url);
    return this.http.get<Episode>(url);
  }

}
