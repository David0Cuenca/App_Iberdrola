import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
