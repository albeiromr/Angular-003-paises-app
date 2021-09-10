import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region.component.ts/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//a continuación la forma en la cual se definen las rutas en angular
const routes: Routes = [
  {
    //string vacío significa la ruta raíz de la app
    path: '',
    component: PorPaisComponent,
    //pathMatch es el equivalente a exact en react router dom
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital', 
    component: PorCapitalComponent,
    pathMatch: 'full',
  },
  //la siguiente ruta cambia dependiendo el pais seleccionado
  {
    path: 'pais/:idPais',
    component: VerPaisComponent,
    pathMatch: 'full',
  },
  //la siguiente ruta es para mostrar error 404 o ruta inexistente
  {
    path: '**',
    redirectTo: ""
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
