import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import {FormsModule} from '@angular/forms';
import { ChooseSeasonComponent } from './components/choose-season/choose-season.component';
import { ChooseSeriesComponent } from './components/choose-series/choose-series.component';
import { EpisodeInfoModalComponent } from './components/episode-info-modal/episode-info-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {CommonModule} from '@angular/common';


const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    EpisodesListComponent,
    ChooseSeasonComponent,
    ChooseSeriesComponent,
    EpisodeInfoModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
