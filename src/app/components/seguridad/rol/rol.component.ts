import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: string = '';
  id_rol:string = '';
  intentoEnvio: boolean = false;
  _id: string = '';

  usuario: Usuario = {
    seudonimo: '',
    correo: '',
    contrasena: '',
    rol: { _id: '', nombre: '', descripcion: '' },
  };
  roles: any = [];

  constructor(
    private servicioUsuario: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.listarol();
    $('#rolModal').modal("show");
    if (this.rutaActiva.snapshot.params['id']) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params['id'];
      this.getUsuario(this.id_usuario)
    } else {
      this.modoCreacion = true;
    }
  }

  separa(): void {
    let sep = this._id.split('&');
    this.usuario.rol._id = sep[0];
    this.usuario.rol.nombre = sep[1];
    this.usuario.rol.descripcion = sep[2];
    this.id_rol = sep[0];
  }

  getUsuario(id: string) {
    this.servicioUsuario.getUsuario(id).subscribe((data) => {
      this.usuario = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      console.log(this.usuario);
      this.servicioUsuario.crear(this.usuario).subscribe((data) => {
        Swal.fire(
          'Creado',
          'El usuario ha sido creado correctamente',
          'success'
        );
        this.router.navigate(['usuario']);
      });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.servicioUsuario.asignar(this.id_usuario, this.id_rol, this.usuario ).subscribe((data)=> {});
      this.servicioUsuario.editar(this.id_usuario, this.usuario).subscribe((data) => {
          Swal.fire(
            'Actualizado',
            'El usuario ha sido actualizado correctamente',
            'success'
          );
          this.router.navigate(['usuario']);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.usuario.seudonimo == '' || this.usuario.correo == '') {
      this.router.navigate(['usuario']);
      Swal.fire({
        icon: 'error',
        title: 'DATOS INCOMPLETOS',
        text: 'Por favor llenar todos los campos',
      });
      return false;
    } else {
      return true;
    }
  }
  regreso(): void {
    this.router.navigate(['usuario']);
  }
  listarol(): void {
    this.servicioUsuario.listarol().subscribe((data) => {
      this.roles = data;
    });
  }
}
