import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_gateway}/usuarios`);
  }
  listarol(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_gateway}/roles`);
  }
  eliminar(id: string) {
    return this.http.delete<Usuario>(
      `${environment.url_gateway}/usuarios/${id}`
    );
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${environment.url_gateway}/usuarios/${id}`
    );
  }
  crear(usuario: Usuario) {
    return this.http.post(
      `${environment.url_gateway}/usuarios`,
      usuario
    );
  }
  editar(id: string, usuario: Usuario) {
    return this.http.put(
      `${environment.url_gateway}/usuarios/${id}`,
      usuario
    );
  }

  asignar(id: string, id_rol:string, usuario: Usuario) {
    return this.http.put(
      `${environment.url_gateway}/usuarios/${id}/rol/${id_rol}`,usuario
    );
  }

}
