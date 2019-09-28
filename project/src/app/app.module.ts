import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from "ng2-file-upload";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {SampleService} from './sample.service';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

const approutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: SignupComponent },
  { path: "addproduct", component: AddproductComponent },
  { path: "viewproducts", component: ViewproductsComponent },
  { path: "updateproduct/:id", component: UpdateproductComponent }]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddproductComponent,
    ViewproductsComponent,
    UpdateproductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FileUploadModule

  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
