import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';
import { LoginComponent } from './login/login.component';
import { LayoutLoginDefaultComponent } from 'src/app/pages/components/layout-login-default/layout-login-default.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutLoginDefaultComponent,
    PrimaryInputComponent,
    HomeComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ]
})

export class PagesModule { }
