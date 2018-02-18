import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AnimalsPageComponent } from './animals-page/animals-page.component';
import { BirdsPageComponent } from './birds-page/birds-page.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

import { appRouter } from './app-routes';
import { RowComponent } from './row/row.component';
import { TimingComponent } from './timing/timing.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsPageComponent,
    BirdsPageComponent,
    PageLayoutComponent,
    RowComponent,
    TimingComponent,
  ],
  imports: [
    appRouter,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
