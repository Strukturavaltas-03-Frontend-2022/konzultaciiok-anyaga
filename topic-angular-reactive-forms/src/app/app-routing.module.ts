import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './page/car/car.component';
import { HomeComponent } from './page/home/home.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { UserComponent } from './page/user/user.component';
import { UserCardComponent } from './page/usercard/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'usercard',
    component: UserCardComponent,
  },
  {
    path: 'user/edit/:id',
    component: UserEditorComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
