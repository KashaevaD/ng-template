import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AnimalsPageComponent } from './animals-page/animals-page.component';
import { BirdsPageComponent } from './birds-page/birds-page.component';
import { TimingComponent } from './timing/timing.component';


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
  },
  {
    path: 'timing',
    component: TimingComponent
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
