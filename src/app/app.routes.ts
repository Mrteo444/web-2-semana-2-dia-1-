import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PersonalComponent } from './page/personal/personal.component';
import { Error404Component } from './page/error404/error404.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import { GaleriadetallesComponent } from './components/galeriadetalles/galeriadetalles.component';
import { FormulioEditableComponent } from './paages/formulio-editable/formulio-editable.component';

export const routes: Routes = [
    {path : "home", component:HomeComponent},
    {path : "personal",component:PersonalComponent},
    {path : "nostros",component:NosotrosComponent},
    {path : "galeria",component:GaleriaComponent},
    {path : "editar/:idNosotros",component:FormulioEditableComponent},

    {path : 'galeriaDetalle/:idGaleria',component:GaleriadetallesComponent},
   
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
