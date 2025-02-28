import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';

export const authRoutes: Routes = [
    {
        path: '', redirectTo: 'auth/login', pathMatch:'full'
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'error',
                component: PageErrorComponent,
              },
              {
                path: 'not-found',
                component: PageNotFoundComponent,
              },
              {
                path: 'unauthorized',
                component: PageUnauthorizedComponent,
              },
            {
                path: '**',
                redirectTo: 'login',
            },
        ],
    },
    {
        path: '',
        loadChildren: () => import('./sections/sections.routes'),
    },

]

export default authRoutes;