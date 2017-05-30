// defaults
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// custom
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AlbumComponent} from './components/album/album.component';
import {AuthService} from './services/auth.service';

// define routes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'album',
    component: AlbumComponent,
    canActivate: [AuthService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

// export to use in app.module
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
