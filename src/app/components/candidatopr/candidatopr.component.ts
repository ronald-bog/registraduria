import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Candidato } from '../../modelos/candidato.model';
import { CandidatoService } from '../../servicios/candidato.service';
import { Partido } from 'src/app/modelos/partido.model';
import { PartidoService } from 'src/app/servicios/partido.service';

@Component({
  selector: 'app-candidatopr',
  templateUrl: './candidatopr.component.html',
  styleUrls: ['./candidatopr.component.css']
})
export class CandidatoprComponent implements OnInit {
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  candidato: Candidato = {
    cedula:"" ,
    nombre_apellido:"",
    resolucion:""
  }
  point: Candidato = {
    id_partido:""
  }
  partidos: Partido[] = [];
  constructor(private servicioPartido: PartidoService, private servicioCandidato: CandidatoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
    $('#candidatosprModal').modal("show");
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

  asignar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioCandidato.asignar(this.id_candidato,this.point,this.candidato).
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
  listar(): void {
    this.servicioPartido.listar().subscribe((data) => {
      this.partidos = data;
    });
  }
}
