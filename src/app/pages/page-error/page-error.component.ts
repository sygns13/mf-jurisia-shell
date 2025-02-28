import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-page-error',
  imports: [ButtonModule, RippleModule, RouterModule, AppFloatingConfigurator, ButtonModule],
  templateUrl: './page-error.component.html',
  styleUrl: './page-error.component.scss'
})
export class PageErrorComponent {

}
