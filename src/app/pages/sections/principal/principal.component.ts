import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,DialogModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  showUnderConstructionDialog: boolean = false;

  constructor(
      private router: Router,
    ) {
    }

  navegarConsultaIA() {
    this.router.navigate(['/consultas']);  // Ruta estática
  }

  abrirDialogEnConstruccion() {
    this.showUnderConstructionDialog = true;
  }

}
