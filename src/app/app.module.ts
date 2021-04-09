import { UserFormModule } from './BackEnd/components/user-form/user-form.module';
import { NgModule } from '@angular/core';
import { UserService } from './BackEnd/services/user-service.service';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { UserListComponent } from './BackEnd/components/user-list/user-list.component';
import { UserFormComponent } from './BackEnd/components/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent, TemplateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
