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
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminuserComponent,
    NormaluserComponent,
    GlobaluserdashboardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      {
        path: 'adminuser',
        canActivate: [CheckuserGuard],
        component: AdminuserComponent,
      },
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
