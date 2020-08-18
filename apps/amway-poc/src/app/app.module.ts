import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { NormaluserComponent } from './normaluser/normaluser.component';
import { GlobaluserdashboardComponent } from './globaluserdashboard/globaluserdashboard.component';
import { CheckuserGuard } from './checkuser.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminuserComponent,
    NormaluserComponent,
    GlobaluserdashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'adminuser', component: AdminuserComponent },
      { path: 'normaluser', component: NormaluserComponent },
      {
        path: 'globaluser',
        canActivate: [CheckuserGuard],
        component: GlobaluserdashboardComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
