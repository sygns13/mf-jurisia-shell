import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-page-unauthorized',
  imports: [ButtonModule, RouterModule, RippleModule, AppFloatingConfigurator, ButtonModule],
  templateUrl: './page-unauthorized.component.html',
  styleUrl: './page-unauthorized.component.scss'
})
export class PageUnauthorizedComponent {

}
