import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
//import 'jasmine';
import { RouterTestingModule } from '@angular/router/testing';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddTaskComponent,
    ViewTaskComponent,
    AddUserComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
