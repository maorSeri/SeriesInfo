import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EpisodesListComponent} from '../episodes-list/episodes-list.component';
import {SeriesService} from '../../services/series.service';

export interface DialogData {
  seriesName: string;
  seasonNumber: string;
  episodeNumber: number;
}

@Component({
  selector: 'app-episode-info-modal',
  templateUrl: './episode-info-modal.component.html',
  styleUrls: ['./episode-info-modal.component.css']
})
export class EpisodeInfoModalComponent implements OnInit {

  seriesName: string;
  seasonNumber: string;
  episodeNumber: number;
  title: string;
  runtime: string;
  genre: string;
  plot: string;
  poster: string;
  constructor(
    private seriesService: SeriesService,
    public dialogRef: MatDialogRef<EpisodesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.seriesName = this.data.seriesName;
    this.seasonNumber = this.data.seasonNumber;
    this.episodeNumber = this.data.episodeNumber;
    this.seriesService.getEpisode(this.seriesName, this.seasonNumber, this.episodeNumber)
      .subscribe(episode => {
      this.title = episode.Title;
      this.runtime = episode.Runtime;
      this.genre = episode.Genre;
      this.plot = episode.Plot;
      this.poster = episode.Poster;
    });
  }

}
