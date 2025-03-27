import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom, from } from 'rxjs';

export const authenticatedGuard: CanMatchFn = async (
  route: Route,
  segments: UrlSegment[]
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const isAuthenticated = await authService.isLogin(); // Espera a que la promesa se resuelva

    console.log('isAuthenticated', isAuthenticated);

    if (isAuthenticated) {
      return true; // Permite el acceso a la ruta
    } else {
      console.log('navigate /auth/login');
      router.navigate(['/auth/login']); // Redirige al login si no está autenticado
      return false;
    }
  } catch (error) {
    console.error('Error en el guardia:', error);
    router.navigate(['/auth/login']); // Redirige al login en caso de error
    return false;
  }
  
};
