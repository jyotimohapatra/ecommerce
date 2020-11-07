import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginupComponent } from './signin/loginup/loginup.component';
import { HomenavComponent } from './navbar/homenav/homenav.component';

const routes: Routes = [
  {path: 'login', component: LoginupComponent},
  {path: '' , component: HomenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
