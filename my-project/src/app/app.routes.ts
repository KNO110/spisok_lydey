import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  {
    path: 'add-user',
    loadComponent: () =>
      import('./add-user/add-user.component').then((c) => c.AddUserComponent),
  },
];
