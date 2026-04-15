import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'icons', pathMatch: 'full' },

  { path: 'icons', loadComponent: () => import('./pages/icons/icons.component').then((m) => m.IconsComponent) },

  { path: '**', redirectTo: 'icons', pathMatch: 'full' },
];
