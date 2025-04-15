import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
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
    showProfilePanel = false;

    constructor(public layoutService: LayoutService,private authService: AuthService) {}

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
