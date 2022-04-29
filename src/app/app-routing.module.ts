import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'monday',
    loadChildren: () =>
      import('./monday/monday.module').then((m) => m.MondayPageModule),
  },
  {
    path: 'tuesday',
    loadChildren: () =>
      import('./tuesday/tuesday.module').then((m) => m.TuesdayPageModule),
  },
  {
    path: 'wednesday',
    loadChildren: () =>
      import('./wednesday/wednesday.module').then((m) => m.WednesdayPageModule),
  },
  {
    path: 'thursday',
    loadChildren: () =>
      import('./thursday/thursday.module').then((m) => m.ThursdayPageModule),
  },
  {
    path: 'friday',
    loadChildren: () =>
      import('./friday/friday.module').then((m) => m.FridayPageModule),
  },
  {
    path: 'saturday',
    loadChildren: () =>
      import('./saturday/saturday.module').then((m) => m.SaturdayPageModule),
  },
  {
    path: 'sunday',
    loadChildren: () =>
      import('./sunday/sunday.module').then((m) => m.SundayPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
