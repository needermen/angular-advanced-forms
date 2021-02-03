import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReusableFormsComponent} from './reusable-forms/reusable-forms.component';
import {Form1Component} from './reusable-forms/form1/form1.component';
import {Form2Component} from './resuable-forms-value-accesor/form2/form2.component';
import {AddressFormComponent} from './core/6-address-form/address-form.component';
import {GenericInputComponent} from "./core/3-generic-input/generic-input.component";
import {GenericInputWithoutValidationComponent} from "./core/2-generic-input-without-validation/generic-input-without-validation.component";
import {MyPasswordInputComponent} from "./core/4-my-password-input/my-password-input.component";
import {FirstCustomInputComponent} from "./core/1-first-custom-input/first-custom-input.component";
import {ResuableFormsValueAccesorComponent} from "./resuable-forms-value-accesor/resuable-forms-value-accesor.component";
import {FirstComponent} from "./first/first.component";
import {AddressFormV2Component} from "./core/7-address-form-control-value-accessor/address-form-v2.component";

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    GenericInputWithoutValidationComponent,
    LoginComponent,
    RegisterComponent,
    ReusableFormsComponent,
    Form1Component,
    Form2Component,
    AddressFormComponent,
    MyPasswordInputComponent,
    AddressFormV2Component,
    FirstCustomInputComponent,
    FirstComponent,
    ResuableFormsValueAccesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
