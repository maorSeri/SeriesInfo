import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SeriesService} from '../../services/series.service';
import {DoCheck, KeyValueDiffers, KeyValueDiffer} from '@angular/core';
import {SeriesInfo} from '../../models/seriesInfo';
import {Observable} from 'rxjs';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-choose-series',
  templateUrl: './choose-series.component.html',
  styleUrls: ['./choose-series.component.css']
})
export class ChooseSeriesComponent implements OnInit {
  selectedOption: string;
  selectedSeason: string;
  numOfSeasons: number;
  seasons: number[];
  show: boolean;
  series = [
    {name: 'Friends'},
    {name: 'Prison Break'},
    {name: 'Gilmore Girls'},
    {name: 'Grey\'s Anatomy'},
    {name: 'Peaky Blinders'}
  ];
  differ: KeyValueDiffer<string, any>;

  // public numOfEpisodes: number;
  constructor(private seriesService: SeriesService, private differs: KeyValueDiffers, private router: Router) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.seriesService.getSeries(this.selectedOption)
      .subscribe(series => {
          this.numOfSeasons = series.totalSeasons;
        }
      );
  }
}

