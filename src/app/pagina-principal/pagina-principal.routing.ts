import { Routes } from "@angular/router";

import { PantallaContratosComponent } from "../pantalla-contratos/pantalla-contratos.component";
import { PaginaPrincipalComponent } from "./pagina-principal.component";
import { PantallaUsuariosComponent } from "../pantalla-usuarios/pantalla-usuarios.component";
import { PantallaFacturacionComponent } from "../pantalla-facturacion/pantalla-facturacion.component";

export const PaginaPrincipalRoutes: Routes =[
    {path: 'dashboard',     component: PaginaPrincipalComponent},
    {path: 'Usuarios',      component: PantallaUsuariosComponent},
    {path: 'Contratos',     component: PantallaContratosComponent},
    {path: 'Facturacion',   component: PantallaFacturacionComponent}
    
]