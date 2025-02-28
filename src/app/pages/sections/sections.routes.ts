import { Routes } from '@angular/router';
import { AppLayout } from '../../layout/component/app.layout';
import { PrincipalComponent } from './principal/principal.component';

export const authRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: 'principal',
                component: PrincipalComponent,
            }
        ]

    }

]

export default authRoutes;