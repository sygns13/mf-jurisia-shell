import { Routes } from '@angular/router';
import { AppLayout } from '../../layout/component/app.layout';
import { PrincipalComponent } from './principal/principal.component';
import { authenticatedGuard } from '../../guards/authenticated.guard';

export const authRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canMatch: [authenticatedGuard],
        children: [
            {
                path: 'principal',
                component: PrincipalComponent,
            }
        ]

    }

]

export default authRoutes;