import {Component, Input, KeyValueDiffers, OnInit} from '@angular/core';
import {SeriesService} from '../../services/series.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-season',
  templateUrl: './choose-season.component.html',
  styleUrls: ['./choose-season.component.css']
})
export class ChooseSeasonComponent implements OnInit {
  @Input() selectedSeries: string;
  @Input() numOfSeasons: number;
  seasons: number[];
  selectedSeason: string;

  constructor(private seriesService: SeriesService, private differs: KeyValueDiffers, private router: Router) { }

  ngOnInit(): void {
    this.seasons = [];
    for (let i = 1; i <= this.numOfSeasons; i++) {
      this.seasons.push(i);
    }
  }

  onSelectSeason(): void {
    this.router.navigate(['episodes-list', this.selectedSeries, this.selectedSeason]);
  }

}
