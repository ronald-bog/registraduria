import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UsuarioComponent,
    RolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule,
  ]
})
export class SeguridadModule { }
