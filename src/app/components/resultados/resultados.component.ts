import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from 'src/app/modelos/resultado.model';
import { ResultadoService } from 'src/app/servicios/resultado.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  resultados: any = [];

  constructor(private servicioResultado: ResultadoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioResultado.listar().subscribe((data) => {
      this.resultados = data;
    });
  }
  agregar(): void {
    this.router.navigate(['resultadoscr']);
  }
  editar(id: string): void {
    this.router.navigate(['resultadosup/' + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Resultado',
      text: 'Está seguro que quiere eliminar el resultado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioResultado.eliminar(id).subscribe((data) => {
          Swal.fire(
            'Eliminado!',
            'El resultado ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }
  trackByFn(index: number, item: any): any {
    return item.id;
  }
}