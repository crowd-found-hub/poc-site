import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { LoginComponent }       from './components/authentication/login/login.component';
import { ProjectTokensComponent } from './components/profile/project-tokens/project-tokens.component';
import { UserSettingsComponent } from './components/profile/user-settings/user-settings.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { LoggedInGuard } from './_guards/index';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'profile/project-tokens',
    component: ProjectTokensComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile/user-settings',
    component: UserSettingsComponent,
    canActivate: [LoggedInGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
