import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactosPageComponent } from './pages/contactos-page/contactos-page.component';
import { ContactosDetallePageComponent } from './pages/contactos-detalle-page/contactos-detalle-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipe/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { KabanTasksComponent } from './components/kaban-tasks/kaban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactosPageComponent,
    ContactosDetallePageComponent,
    LoginFormComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavComponent,
    DashboardComponent,
    TasksComponent,
    KabanTasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Modulo perosnalizado de angular material
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
