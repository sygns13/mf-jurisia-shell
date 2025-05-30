import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.html',
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/principal'] }]
            },
            {
                label: 'Módulos Funcionales',
                items: [
                    { label: 'Consulta con ApuBot', customIconUrl: 'assets/img/apuBotIcon-w.svg', routerLink: ['/consultas/apubot'] },
                    { label: 'Expediente Judicial', icon: 'pi pi-fw pi-file', routerLink: ['/expedientes/generar-documento'] },

                ]
            },
            {
                label: 'Métricas',
                items: [
                    { label: 'Documentos Generados', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/metricas/documentos-generados'], underConstruction: false },
                    { label: 'Consulta a la IA', icon: 'pi pi-fw pi-chart-line', routerLink: ['/metricas/consulta-ia'], underConstruction: false },
                    { label: 'Uso de ChatBot', icon: 'pi pi-fw pi-telegram', routerLink: ['/metricas/chatbot'], underConstruction: false }

                ]
            },
        ];
    }
}
