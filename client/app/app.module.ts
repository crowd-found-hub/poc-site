import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { ProjectsDashboardComponent }   from './components/projects-dashboard/projects-dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { LoginComponent }       from './components/authentication/login/login.component';
import { ProjectTokensComponent } from './components/profile/project-tokens/project-tokens.component';
import { UserSettingsComponent } from './components/profile/user-settings/user-settings.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { LoginNavComponent } from './components/_common/login-nav/login-nav.component';
import { AlertComponent } from './components/_common/alert/alert.component';
import { FeaturesDashboardComponent } from './components/features-dashboard/features-dashboard.component';

import { AlertService, AuthenticationService, EventBrokerService, FeatureService, HeroService, ProjectService, UserService }  from './_services/index';
import { LoggedInGuard } from './_guards/index';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AlertComponent,
    AppComponent,
    FeaturesDashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoginComponent,
    ProjectDetailComponent,
    ProjectsDashboardComponent,
    ProjectsComponent,
    ProjectTokensComponent,
    UserSettingsComponent,
    RegisterComponent,
    LoginNavComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    EventBrokerService,
    FeatureService,
    HeroService,
    ProjectService,
    UserService,
    LoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
