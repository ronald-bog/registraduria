import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Partido } from '../../modelos/partido.model';
import { PartidoService } from '../../servicios/partido.service';

@Component({
  selector: 'app-partidoscr',
  templateUrl: './partidoscr.component.html',
  styleUrls: ['./partidoscr.component.css']
})
export class PartidoscrComponent implements OnInit {
  modoCreacion: boolean = true;
  id_partido: string = "";
  intentoEnvio: boolean = false;
  partido: Partido = {
    nombre:"" ,
    lema:""
  }
  constructor(private servicioPartido: PartidoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    $('#partidoscrModal').modal("show");
    if (this.rutaActiva.snapshot.params['id']) {
      this.modoCreacion = false;
      this.id_partido = this.rutaActiva.snapshot.params['id'];
      this.getPartido(this.id_partido)
    } else {
      this.modoCreacion = true;
    }

  }
  getPartido(id: string) {
    this.servicioPartido.getPartido(id).
      subscribe(data => {
        this.partido = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.servicioPartido.crear(this.partido).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El partido ha sido creado correctamente',
            'success'
          )
          this.router.navigate(['partidos']);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioPartido.editar(this.id_partido,this.partido).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El partido ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(['partidos']);
        });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.partido.nombre=="" ||
       this.partido.lema==""){
        this.router.navigate(['partidos']);
        Swal.fire({
          icon: 'error',
          title: 'DATOS INCOMPLETOS',
          text: 'Por favor llenar todos los campos',
        })
      return false;

    }else{
      return true;
    }
  }
  regreso():void{
    this.router.navigate(['partidos']);
  }
}
