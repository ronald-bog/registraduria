import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/modelos/mesa.model';
import { MesaService } from 'src/app/servicios/mesa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css'],
})
export class MesasComponent implements OnInit {
  mesas:Mesa[] = [];
  constructor(private servicioMesa: MesaService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioMesa.listar().subscribe((data) => {
      this.mesas = data;
    });
  }
  agregar(): void {
    this.router.navigate(['mesascr']);
  }
  editar(id: string): void {
    this.router.navigate(['update/' + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Mesa',
      text: 'Está seguro que quiere eliminar la mesa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioMesa.eliminar(id).subscribe((data) => {
          Swal.fire(
            'Eliminado!',
            'La mesa ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }
}
