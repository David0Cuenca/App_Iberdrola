import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[]=[
  { path:'./pagina-principal',     title:"Dashboard",  icon:'nc-bank', class:'' },
  { path:'./pantalla-usuarios',    title:"Usuarios",   icon:'nc-bank', class:'' },
  { path:'./pantalla-contratos',   title:"Contatos",   icon:'nc-bank', class:'' },
  { path:'./pantalla-facturacion', title:"Dashboard",  icon:'nc-bank', class:'' },
]

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
    
  public menuItems: any[]=[];
    
  ngOnInit() {
        this.menuItems = ROUTES.filter(route => route.title);
    }
}
