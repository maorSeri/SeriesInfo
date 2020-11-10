import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SeriesService} from '../../services/series.service';
import {EpisodeInfo} from '../../models/EpisodeInfo';
import {MatDialog} from '@angular/material/dialog';
import {EpisodeInfoModalComponent} from '../episode-info-modal/episode-info-modal.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  seriesName: string;
  seasonNumber: string;
  episodeNumber: number;
  gridData: EpisodeInfo[];
  animal: string;
  name: string;

  constructor(private seriesService: SeriesService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.seriesName = this.route.snapshot.paramMap.get('seriesName');
    this.seasonNumber = this.route.snapshot.paramMap.get('seasonName');
    this.seriesService.getSeason(this.seriesName, this.seasonNumber)
      .subscribe(season => {
          console.log(season);
          this.gridData = season.Episodes;
        }
      );
  }
  onCellClick(e): void{
    console.log(e.dataItem.Episode);
    if (e.columnIndex === 0){
      this.episodeNumber = e.dataItem.Episode;
      this.openDialog();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EpisodeInfoModalComponent, {
      width: '500px',
      data: {seriesName: this.seriesName, seasonNumber: this.seasonNumber , episodeNumber: this.episodeNumber}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
