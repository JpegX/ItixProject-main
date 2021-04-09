import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './BackEnd/components/user-form/user-form.component';
import { UserListComponent } from './BackEnd/components/user-list/user-list.component';

const routes: Routes = [
  { path: 'api', component: UserListComponent },
  { path: 'user', component: UserFormComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
