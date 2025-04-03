import { Routes } from '@angular/router';
import { AppLayout } from '../../layout/component/app.layout';
import { PrincipalComponent } from './principal/principal.component';
import { authenticatedGuard } from '../../guards/authenticated.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';
const environment = (window as any).__env as any;

export const authRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canMatch: [authenticatedGuard],
        children: [
            {
                path: 'principal',
                component: PrincipalComponent,
            },
            {
                path: 'consultas',
                loadChildren: () =>
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: `${environment.CONSULTAIA_MF_URL}/remoteEntry.js?ts=${Date.now()}`,
                        exposedModule: './routes',
                    }).then((m) => m.routes),
            }
            /* {
                path: 'modulo1',
                loadChildren: () =>
                  loadRemoteModule({
                    type: 'module',
                    //remoteEntry: `${environment.CONSULTAIA_MF_URL}/remoteEntry.js?ts=${Date.now()}`,
                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                    //remoteName: 'mf-jurisia-consultaia',
                    exposedModule: './Routes',
                  }).then((m) => {return m.default}),
              }, */
        ]

    }

]

export default authRoutes;