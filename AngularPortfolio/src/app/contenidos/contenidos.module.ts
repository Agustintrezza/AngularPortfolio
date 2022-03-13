import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { InfoComponent } from './pages/info/info.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    ProyectosComponent,
    SobremiComponent,
    InfoComponent
  ],
  exports: [
   ProyectosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatExpansionModule
  ]
})
export class ContenidosModule { }
