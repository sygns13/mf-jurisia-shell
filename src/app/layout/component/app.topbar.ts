import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { Button } from 'primeng/button';
@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, Button],
    templateUrl: './app.topbar.html',
    styleUrl: './app.topbar.scss'
})
export class AppTopbar {
    items!: MenuItem[];
    username: string = '';
    nombres: string = '';
    apellidos: string = '';
    documento: string = '';
    dependencia: string = '';
    showProfilePanel = false;

    constructor(public layoutService: LayoutService,private authService: AuthService) {}

  ngOnInit(): void {
      const encodedKey = btoa(environment.AUTH_USERNAME_NAME);
      const username = localStorage.getItem(encodedKey);

      const sessionIdEncoded = btoa(environment.AUTH_SESSION_ID_NAME);
      const sessionIdRaw = localStorage.getItem(sessionIdEncoded);

      if (username) {
        this.username = username;
      }

      // Si también guardaste el objeto completo como JSON:
      const userSessionData = localStorage.getItem('session_user_data'); // opcional

      if (userSessionData) {
        const user = JSON.parse(userSessionData);
        this.nombres = user.nombres;
        this.apellidos = user.apellidos;
        this.documento = user.documento;
        this.dependencia = user.nombreDependencia;
      }
    }
    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
    toggleProfilePanel() {
        this.showProfilePanel = !this.showProfilePanel;
    }

    logout() {
        this.authService.logOut();
    }
}
