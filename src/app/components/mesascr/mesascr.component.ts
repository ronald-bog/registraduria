import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Mesa } from '../../modelos/mesa.model';
import { MesaService } from '../../servicios/mesa.service';

@Component({
  selector: 'mesaCR',
  templateUrl: './mesascr.component.html',
  styleUrls: ['./mesascr.component.css']
})
export class MesascrComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  mesa: Mesa = {
    numero: '',
    cedulas: '',
  }

  constructor(private servicioMesa: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    $('#mesascrModal').modal("show");
    if (this.rutaActiva.snapshot.params['id']) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params['id'];
      this.getMesa(this.id_mesa)
    } else {
      this.modoCreacion = true;
    }

  }
  getMesa(id: string) {
    this.servicioMesa.getMesa(id).
      subscribe(data => {
        this.mesa = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.servicioMesa.crear(this.mesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'La mesa ha sido creada correctamente',
            'success'
          )
          this.router.navigate(['mesas']);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioMesa.editar(this.id_mesa, this.mesa).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'La mesa ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(['mesas']);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.mesa.numero == '' ||
      this.mesa.cedulas == '') {
      this.router.navigate(['mesas']);
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
    this.router.navigate(['mesas']);
  }
}
