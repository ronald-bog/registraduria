import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Candidato } from '../../modelos/candidato.model';
import { CandidatoService } from '../../servicios/candidato.service';

@Component({
  selector: 'app-candidatoscr',
  templateUrl: './candidatoscr.component.html',
  styleUrls: ['./candidatoscr.component.css']
})
export class CandidatoscrComponent implements OnInit {
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  candidato: Candidato = {
    cedula:"" ,
    nombre_apellido:"",
    resolucion:""
  }
  constructor(private servicioCandidato: CandidatoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    $('#candidatoscrModal').modal("show");
    if (this.rutaActiva.snapshot.params['id']) {
      this.modoCreacion = false;
      this.id_candidato = this.rutaActiva.snapshot.params['id'];
      this.getCandidato(this.id_candidato)
    } else {
      this.modoCreacion = true;
    }

  }
  getCandidato(id: string) {
    this.servicioCandidato.getCandidato(id).
      subscribe(data => {
        this.candidato = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.servicioCandidato.crear(this.candidato).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El candidato ha sido creado correctamente',
            'success'
          )
          this.router.navigate(['candidatos']);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioCandidato.editar(this.id_candidato,this.candidato).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El candidato ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(['candidatos']);
        });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.candidato.cedula=="" ||
       this.candidato.nombre_apellido==""||
       this.candidato.resolucion==""
       ){
        this.router.navigate(['candidatos']);
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
    this.router.navigate(['candidatos']);
  }
}
