import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Notifications } from './pages/notifications/notifications';
import { Settings } from './pages/settings/settings';
import { AddServer } from './components/add-server/add-server';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

import { authGuard } from './guard/auth.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'register',
        component: Register
    },

    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },

    {
        path: 'profile',
        component: Profile,
        canActivate: [authGuard]
    },

    {
        path: 'notifications',
        component: Notifications,
        canActivate: [authGuard]
    },

    {
        path: 'settings',
        component: Settings,
        canActivate: [authGuard]
    },

    {
        path: 'servers/add',
        component: AddServer,
        canActivate: [authGuard]
    }

];