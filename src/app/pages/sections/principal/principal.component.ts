import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  constructor(
      private router: Router,
    ) {
    }

  navegarConsultaIA() {
    this.router.navigate(['/consultas']);  // Ruta estática
    // O con parámetros
    /* this.router.navigate(['/ruta', parametro], { 
      queryParams: { usuario: '123' },
      state: { data: 'oculto' }
    }); */
  }

}
