import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './contenidos/pages/proyectos/proyectos.component';
import { SobremiComponent } from './contenidos/pages/sobremi/sobremi.component';
import { InfoComponent } from './contenidos/pages/info/info.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: HeaderComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'mis-proyectos',
    component: ProyectosComponent,
    pathMatch: 'full'
  },
  {
    path: 'sobremi',
    component: SobremiComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: '**',
    redirectTo: 'mis-proyectos'   // Acá tmb se puede armar un componente tipo page de Error.
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
