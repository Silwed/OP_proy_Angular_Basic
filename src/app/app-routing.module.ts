import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactosPageComponent } from './pages/contactos-page/contactos-page.component';
import { ContactosDetallePageComponent } from './pages/contactos-detalle-page/contactos-detalle-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { loginGuard } from './guards/login.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo : 'dashboard'},

  {path:'login', component : LoginPageComponent, canActivate : [loginGuard] },
  {path :'dashboard', component : DashboardComponent,
  children :[
    {path:'', component:HomePageComponent,canActivate : [authGuard]},
    {path: 'contacts', component : ContactosPageComponent,canActivate : [authGuard]},
    {path: 'contacts/:id', component: ContactosDetallePageComponent,canActivate : [authGuard]},
    {path: 'random', component : RandomContactPageComponent,canActivate : [authGuard] },
    {path: 'task', component : TasksComponent,canActivate : [authGuard] },
  ], canActivate : [authGuard]
  },

  {path: '**', component : NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
