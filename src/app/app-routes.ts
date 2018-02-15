import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AnimalsPageComponent} from './animals-page/animals-page.component';
import {BirdsPageComponent} from './birds-page/birds-page.component';


export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animals'
  },
  {
    path: 'animals',
    component: AnimalsPageComponent,
  },
  {
    path: 'birds',
    component: BirdsPageComponent,
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
