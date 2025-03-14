import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  administrador: boolean = false;
  jurado: boolean = false;
  ciudadano: boolean = false;
  auth: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }
  ngDoCheck(): void {
    let local: any = localStorage.getItem('sesion');
    if (local != null) {
      let usuario: any = JSON.parse(localStorage.getItem('sesion') || '');

      if (usuario.rol == 'Administrador') {
        this.administrador = true;
        this.auth = true;
      }
      if (usuario.rol == 'Jurado') {
        console.log('sii jurado');
        this.jurado = true;
        this.auth = true;
      }

      if (usuario.rol == 'Ciudadano') {
        console.log('siii Ciudadano');
        this.ciudadano = true;
        this.auth = true;
      }
    }
  }
  logout() {
    localStorage.removeItem('sesion');
    this.router.navigate(['']);
    this.auth = false;
    this.jurado = false;
    this.ciudadano = false;
    this.administrador = false;
  }
}
