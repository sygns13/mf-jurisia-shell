import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { LoginService } from 'src/app/services/login.service';
import { totalConversaciones } from 'src/app/interfaces/session-id';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,DialogModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  showUnderConstructionDialog: boolean = false;
  totalConversaciones: number = 0;

  constructor(
      private router: Router,private loginService: LoginService
    ) {
    }

  ngOnInit(): void {
    this.consultarTotalConversaciones();
  }

  navegarConsultaIA() {
    this.router.navigate(['/consultas']);  // Ruta estática
  }
  navegarConsultaExpediente() {
    this.router.navigate(['/expedientes/generar-documento']);  // Ruta estática
  }

  abrirDialogEnConstruccion() {
    this.showUnderConstructionDialog = true;
  }
  consultarTotalConversaciones() {
    this.loginService.getTotalConversation().subscribe({
      next: (data: totalConversaciones) => {
        this.totalConversaciones = data.totalConversaciones;
      },
      error: (err) => {
        console.error('Error al obtener total de conversaciones:', err);
      }
    });
  }

}
