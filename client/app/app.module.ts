import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { LoginComponent }       from './components/authentication/login/login.component';
import { ProjectTokensComponent } from './components/profile/project-tokens/project-tokens.component';
import { UserSettingsComponent } from './components/profile/user-settings/user-settings.component';
import { RegisterComponent } from './components/authentication/register/register.component';

import { AlertService, AuthenticationService, HeroService, UserService }  from './_services/index';
import { LoggedInGuard } from './_guards/index';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoginComponent,
    ProjectTokensComponent,
    UserSettingsComponent,
    RegisterComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    HeroService,
    UserService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
