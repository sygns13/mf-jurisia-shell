import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
const environment = (window as any).__env as any;
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { IUserData } from '../../layout/interfaces/user-data';
import { UserSession } from '../../interfaces/session-id';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, MessageModule, ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.preloadImages([
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
      'assets/img/img4.jpg'
    ]);

    setTimeout(() => {
      const images = document.querySelectorAll('.background-img');
      let current = 0;

      setInterval(() => {
        images.forEach((img, i) => {
          img.classList.toggle('active', i === current);
        });
        current = (current + 1) % images.length;
      }, 6000); // cambia cada 6 segundos
    }, 500);
  }

  preloadImages(images: string[]): void {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  @ViewChild('inputUsername', { static: false }) inputUsername!: ElementRef;
  @ViewChild('inputPassword', { static: false }) inputPassword!: Password;

  username: string = '';
  password: string = '';
  checked: boolean = false;

  result: boolean = false;
  accessLogin: boolean = true;

  tokenData: IUserData = {} as IUserData;
  sessionId: UserSession = {} as UserSession;

  private env = environment;

  constructor(
    private loginService: LoginService,
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    private service: MessageService,) {

    this.titleService.setTitle("Login");
  }

  public logout() {
    this.authService.logOut();
    this.accessLogin = true;
  }

  searchValue(data: any, value: string) {
    for (let key in data) {
      if (data[key].roles.includes(value)){
        return true
      }
    }
    return false;
  }

  async login(){
    this.logout();

    if(this.username == null || this.username.trim().length == 0){
      this.service.add({ severity: 'error', summary: 'Error', detail: 'Ingrese su usuario' });
      this.setFocusUsername();
      return;
    }
    if(this.password == null || this.password.trim().length == 0){
      this.service.add({ severity: 'error', summary: 'Error', detail: 'Ingrese su contraseña' });
      this.setFocusPassword();
      return;
    }

    this.loginService.login(this.username, this.password).subscribe({
      next: (res: any) => {
          if (res.success) {
            this.sessionId = res.user;

            const token = this.sessionId.token.access_token;

            localStorage.setItem(
              btoa(environment.AUTH_TOKEN_NAME),
              token
            );
            localStorage.setItem(
              btoa(environment.AUTH_REFRESH_TOKEN),
              this.sessionId.token.refresh_token
            );

            localStorage.setItem(
              btoa(environment.AUTH_USERNAME_NAME),
              this.sessionId.username
            );

            localStorage.setItem(
              btoa(environment.AUTH_SESSION_ID_NAME),
              this.sessionId.userSessionsId
            );

            if (token) {
              const helper = new JwtHelperService();
              const tokenData = helper.decodeToken(token);
              let exits = false;
              try{
                this.router.navigate(['principal']);
              } catch(e){
                window.location.reload();
              }
              if (!exits) {
                this.accessLogin = false;
              }
            }
          } else {
            this.service.add({ severity: 'error', summary: 'Error', detail: 'Error obteniendo la Sesión, Comuníquese con el Administrador del Sistema' });
          }
      },
      error: (err) => {
        if(err.status === 400){
          this.service.add({ severity: 'error', summary: 'Error', detail: 'Cuenta deshabilitada' });
        }else if(err.status === 401){
          this.service.add({ severity: 'error', summary: 'Error', detail: 'Cuenta deshabilitada o credenciales de usuario no válidas' });
        }else{
          this.service.add({ severity: 'error', summary: 'Error', detail: 'Error al iniciar sesion, Comuníquese con el Administrador del Sistema' });
        }
      },
      });
  }

  setFocusUsername() {
    this.inputUsername.nativeElement.focus();
  }
  setFocusPassword() {
    this.inputPassword.input.nativeElement.focus();
  }

}
