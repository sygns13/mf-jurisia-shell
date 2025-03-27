import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const environment = (window as any).__env as any;

export const httpHeadersInterceptor: HttpInterceptorFn = (req, next) => {
    // Clona la solicitud y agrega un encabezado personalizado

    // Define la ruta que quieres bypassear
    const bypassRoutes = [`/${environment.API_PATH_SECURITY}/auth/login`]; // Rutas que no deben modificarse

    // Verifica si la URL de la solicitud coincide con alguna ruta en bypassRoutes
    if (bypassRoutes.some(route => req.url.includes(route))) {
        // Si coincide, pasa la solicitud sin modificar
        return next(req);
      }
  

    const token = localStorage.getItem(btoa(environment.AUTH_TOKEN_NAME));
    const sessionId = localStorage.getItem(btoa(environment.AUTH_SESSION_ID_NAME));
    const offset = localStorage.getItem("offset");

    const modifiedReq = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + token || 'none',
        'sessionId': sessionId || 'none',
        'offset': offset || '0',
      }
    });
  
    // Pasa la solicitud modificada al siguiente manejador
    return next(modifiedReq);
  };
/*
@Injectable({
  providedIn: 'root'
})

export class HttpHeadersInterceptor implements HttpInterceptor {

  env: any;

  constructor(){
      this.env = environment;
    }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('HttpHeadersInterceptor');
    
    const token = localStorage.getItem(btoa(this.env.AUTH_TOKEN_NAME));
    const sessionId = localStorage.getItem(btoa(this.env.AUTH_SESSION_ID_NAME));
    const offset = localStorage.getItem("offset");

    return next.handle( req.clone({ headers: req.headers
          .set('Authorization'       , 'Bearer ' + token || 'none')
          .set('sessionId'       , sessionId || 'none')
          .set('offset'       , offset || '0')
      }) );
  
  }

}
*/