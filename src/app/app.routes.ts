import { Routes } from '@angular/router';
import { canActivateGuard } from './can-activate.guard';
import { canLoadGuard } from './can-load.guard';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: SidebarComponent,
    canActivate: [canActivateGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin' },
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
      canLoad: [canLoadGuard]
  },
  {
    path: 'template-forms',
    loadComponent: () =>
      import('./template-driven-form/template-driven-form.component').then(
        (m) => m.TemplateDrivenFormComponent
      ),
      canLoad: [canLoadGuard]
  },

//   {
//     path: '',
//     component: AppComponent
//   },
  // {
  //     path: 'angular-18',
  //     loadComponent: () => import('./angular-18/angular-18.component')
  // },
  // {
  //     path: 'angular-17',
  //     loadComponent: () => import('./angular-17/angular-17.component')
  // },
  // {
  //     path: 'angular-16',
  //     loadComponent: () => import('./angular-16/angular-16.component')
  // },
  // {
  //     path: 'basic-angular',
  //     loadComponent: () => import('./basic-angular/basic-angular.component')
  // }
];
