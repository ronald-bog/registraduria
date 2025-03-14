import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/modelos/candidato.model';
import { CandidatoService } from 'src/app/servicios/candidato.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {
  candidatos: any = [];

  constructor(private servicioCandidato: CandidatoService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioCandidato.listar().subscribe((data) => {
      this.candidatos = data;
    });
  }
  agregar(): void {
    this.router.navigate(['candidatoscr']);
  }
  editar(id: string): void {
    this.router.navigate(['candidatosup/' + id]);
  }
  partido(id: string): void {
    this.router.navigate(['candidatopr/' + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Candidato',
      text: 'Está seguro que quiere eliminar al candidato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioCandidato.eliminar(id).subscribe((data) => {
          Swal.fire(
            'Eliminado!',
            'El candidato ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }
}
