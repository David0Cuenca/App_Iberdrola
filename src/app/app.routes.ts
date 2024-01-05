import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ApplicationConfig } from '@angular/core';


export const appRoutes: Routes = [
    {
      path: 'dashboard',
      component: PaginaPrincipalComponent,
      data: { title: 'Dashboard' }
    },
    { path: '**', 
    component:  PaginaPrincipalComponent}
  ];
  
  export const appConfig: ApplicationConfig = {
      providers: [provideRouter(appRoutes, withDebugTracing())]
  }