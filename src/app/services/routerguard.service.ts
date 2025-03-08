// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// const environment = (window as any).__env as any;;
// import { DataMenu } from 'src/app/layout/classes/data-menu';
// import { IUserData } from 'src/app/layout/interfaces/user-data';

// @Injectable({
//   providedIn: 'root'
// })
// export class RouteguardService implements CanActivate {

//     tokenData: IUserData = null;
//     result: boolean = false;


//   constructor(private router: Router,
//               private dataMenu: DataMenu) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

//     const helper = new JwtHelperService();
//     let token = localStorage.getItem(btoa(environment.KEYCLOAK_TOKEN_NAME));

//     if (token) {

//       this.tokenData = helper.decodeToken(token);
//       this.dataMenu.routesAccess.forEach(menuItem => {
//         if (menuItem.link === state.url) {
//           Object.entries(this.tokenData.resource_access).forEach(([key, resource]) => {
//             resource["roles"].forEach(permission => {
//               if(menuItem.module === permission){
//                 this.result = true;
//                 return this.result;
//               }
//             });
//             if  (this.result) {
//               return this.result;
//             }
//           });
//           return true;
//         }
//       });
//       return this.result;
//     }

//     this.router.navigate(['/unauthorized']);
//     return false;
//   }
// }
