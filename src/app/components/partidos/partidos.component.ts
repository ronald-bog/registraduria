import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from 'src/app/modelos/partido.model';
import { PartidoService } from 'src/app/servicios/partido.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos: Partido[] = [];
  constructor(private servicioPartido: PartidoService, private router: Router) {}


  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioPartido.listar().subscribe((data) => {
      this.partidos = data;
    });
  }
  agregar(): void {
    this.router.navigate(['partidoscr']);
  }
  editar(id: string): void {
    this.router.navigate(['partidosup/' + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Partido',
      text: 'Está seguro que quiere eliminar el partido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioPartido.eliminar(id).subscribe((data) => {
          Swal.fire(
            'Eliminado!',
            'El partido ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }
}
