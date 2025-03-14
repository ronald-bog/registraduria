import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];


  constructor(private servicioUsuario: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioUsuario.listar().subscribe((data) => {
      this.usuarios = data;
    });
  }
  agregar(): void {
    this.router.navigate(['rol']);
  }
  editar(id: string): void {
    this.router.navigate(['rol/' + id]);
  }
  partido(id: string): void {
    this.router.navigate(['usuariopr/' + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: 'Está seguro que quiere eliminar al usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioUsuario.eliminar(id).subscribe((data) => {
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }
}
