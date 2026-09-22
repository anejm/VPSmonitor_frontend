import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Notifications } from './pages/notifications/notifications';
import { Settings } from './pages/settings/settings';
import { AddServer } from './components/add-server/add-server';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'notifications',
        component: Notifications
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: 'servers/add',
        component: AddServer
    }
];