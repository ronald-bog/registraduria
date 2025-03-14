import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Resultado } from '../../modelos/resultado.model';
import { ResultadoService } from '../../servicios/resultado.service';
import { Candidato } from 'src/app/modelos/candidato.model';
import { CandidatoService } from 'src/app/servicios/candidato.service';
import { Mesa } from 'src/app/modelos/mesa.model';
import { MesaService } from 'src/app/servicios/mesa.service';

@Component({
  selector: 'app-resultadoscr',
  templateUrl: './resultadoscr.component.html',
  styleUrls: ['./resultadoscr.component.css']
})
export class ResultadoscrComponent implements OnInit {
  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
  resultado: Resultado = {
    votos: ""
  }
  point: Resultado = {
    id_candidato: "",
    id_mesa: ""
  }
  candidatos: Candidato[] = [];
  mesas: Mesa[] = [];
  constructor(private servicioResultado: ResultadoService,
    private rutaActiva: ActivatedRoute,
    private router: Router, private servicioCandidato: CandidatoService, private servicioMesa: MesaService) { }

  ngOnInit(): void {
    this.listar();
    $('#resultadoscrModal').modal("show");
    if (this.rutaActiva.snapshot.params['id']) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params['id'];
      this.getResultado(this.id_resultado)
    } else {
      this.modoCreacion = true;
    }

  }
  getResultado(id: string) {
    this.servicioResultado.getResultado(id).
      subscribe(data => {
        this.resultado = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.servicioResultado.crear(this.resultado, this.point).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El resultado ha sido creado correctamente',
            'success'
          )
          this.router.navigate(['resultados']);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioResultado.editar(this.id_resultado, this.resultado).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El resultado ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(['resultados']);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.resultado.mesa == "" ||
      this.resultado.candidato == "" ||
      this.resultado.votos == "") {
      this.router.navigate(['resultados']);
      Swal.fire({
        icon: 'error',
        title: 'DATOS INCOMPLETOS',
        text: 'Por favor llenar todos los campos',
      })
      return false;

    } else {
      return true;
    }
  }
  regreso(): void {
    this.router.navigate(['resultados']);
  }
  listar(): void {
    this.servicioCandidato.listar().subscribe((data) => {
      this.candidatos = data;
    });
    this.servicioMesa.listar().subscribe((data) => {
      this.mesas = data;
    });
  }
}
