import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authService: AuthService) { }

  async init(){

    await this.authService.isLogin();

  }
}
