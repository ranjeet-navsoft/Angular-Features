import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
  },
  {
    path: 'template-forms',
    loadComponent: () =>
      import('./template-driven-form/template-driven-form.component').then(
        (m) => m.TemplateDrivenFormComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
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
