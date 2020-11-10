import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EpisodesListComponent} from './components/episodes-list/episodes-list.component';
import {ChooseSeriesComponent} from './components/choose-series/choose-series.component';

const routes: Routes = [
  {path: '', component: ChooseSeriesComponent},
  {path: 'episodes-list/:seriesName/:seasonName', component: EpisodesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
