import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { LoginService } from 'src/app/services/login.service';
import { totalConversaciones, totalDemandasCalificadas } from 'src/app/interfaces/session-id';
import { totalDocsGenerados } from 'src/app/interfaces/session-id';
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
  totalDocsGenerados: number = 0;
  totalExpCalificados: number = 0;
  totalExpSentenciados: number = 0;

  constructor(
      private router: Router,private loginService: LoginService
    ) {
    }

  ngOnInit(): void {
    this.consultarTotalConversaciones();
    this.consultarTotalDocsGenerados();
    this.consultarTotalExpCalificados();
    this.consultarTotalExpSentenciados();
  }

  navegarConsultaIA() {
    this.router.navigate(['/consultas']);  // Ruta estática
  }
  navegarConsultaExpediente() {
    this.router.navigate(['/expedientes/generar-documento']);  // Ruta estática
  }

  navegarMetricasDocumentosGenerados() {
    this.router.navigate(['/metricas']);  // Ruta estática
  }

  navegarCalificacion() {
    this.router.navigate(['/expedientes/calificar-demanda']);
  }

  navegarSentencias() {
    this.router.navigate(['/expedientes/sentenciar-demanda']);
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
  consultarTotalDocsGenerados() {
    this.loginService.getTotalDocsGenerados().subscribe({
      next: (data: totalDocsGenerados) => {
        this.totalDocsGenerados = data.totalDocsGenerados;
      },
      error: (err) => {
        console.error('Error al obtener total de documentos generados:', err);
      }
    });
  }
  consultarTotalExpCalificados() {
    this.loginService.getTotalExpCalificados().subscribe({
      next: (data: totalDemandasCalificadas) => {
        this.totalExpCalificados = data.totalDemandasCalificadas;
      },
      error: (err) => {
        console.error('Error al obtener total de documentos generados:', err);
      }
    });
  }
  consultarTotalExpSentenciados() {
    this.loginService.getTotalExpSentenciados().subscribe({
      next: (data: any) => {
        // Lectura defensiva del total: el nombre exacto del campo lo define el backend.
        this.totalExpSentenciados =
          data?.totalDemandasSentencias
          ?? data?.totalDemandasSentenciadas
          ?? data?.totalSentencias
          ?? data?.total
          ?? 0;
      },
      error: (err) => {
        console.error('Error al obtener total de sentencias realizadas:', err);
      }
    });
  }

}
