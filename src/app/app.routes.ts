import { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'renovaciones',
    loadComponent: () =>
      import('./pages/renovaciones-page/renovaciones-page.component').then(
        m => m.RenovacionesPageComponent
      ),
  },
  {
    path: 'renovaciones/:id',
    loadComponent: () =>
      import(
        './pages/renovaciones-page-details/renovaciones-page-details.component'
      ).then(m => m.RenovacionesPageDetailsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        m => m.NotFoundPageComponent
      ),
  },
]
