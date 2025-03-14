import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from 'src/app/modelos/usuario.model';
import { SeguridadService } from "src/app/servicios/seguridad.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  correo: string = "";
  contrasena: string = "";

  constructor(
    private miServicioSeguridad: SeguridadService,

    private router: Router
  ) {}

  /**
   * Método que se ejecuta una vez se carga la página
   */
  ngOnInit(): void {}
  /**
   * Este método permite llevar a cabo el proceso de login,
   * llamando al método correspondiente de los servicios
   * para solicitar la validación al backend
   */
  login(): void {
    let elUsuario: Usuario = {
      correo: this.correo,
      contrasena: this.contrasena,
    };
    this.miServicioSeguridad.login(elUsuario).subscribe(
      (data) => {
          this.router.navigate(['']);
        this.miServicioSeguridad.guardarDatosSesion(data);
      },
      (error) => {
        Swal.fire({
          title: "Error Login",
          text: error["error"]["message"],
          icon: "error",
          timer: 5000,
        });
      }
    );
  }
}
