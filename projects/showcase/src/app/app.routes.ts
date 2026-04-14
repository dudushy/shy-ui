import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  { path: 'colors', loadComponent: () => import('./pages/colors/colors.component').then(m => m.ColorsComponent) },
  { path: 'typography', loadComponent: () => import('./pages/typography/typography.component').then(m => m.TypographyComponent) },
  { path: 'spacing', loadComponent: () => import('./pages/spacing/spacing.component').then(m => m.SpacingComponent) },
  { path: 'icons', loadComponent: () => import('./pages/icons/icons.component').then(m => m.IconsComponent) },
  { path: 'components', loadComponent: () => import('./pages/components/components.component').then(m => m.ComponentsComponent) },
  { path: 'examples', loadComponent: () => import('./pages/examples/examples.component').then(m => m.ExamplesComponent) },
];
