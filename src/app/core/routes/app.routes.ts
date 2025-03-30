import { Routes } from '@angular/router';

import { StateGuard } from '#utilities/guards/state.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../features/containers/home/home.component').then(m => m.HomeContainer)
  },
  {
    path: 'search-result',
    loadComponent: () => import('../../features/containers/search-result/search-result.component').then(m => m.SearchResultContainer),
    canActivate: [StateGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
