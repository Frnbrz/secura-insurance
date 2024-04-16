import { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { RenovacionesPageDetailsComponent } from './pages/renovaciones-page-details/renovaciones-page-details.component'
import { RenovacionesPageComponent } from './pages/renovaciones-page/renovaciones-page.component'

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'renovaciones', component: RenovacionesPageComponent },
  { path: 'renovaciones/:id', component: RenovacionesPageDetailsComponent },
]
