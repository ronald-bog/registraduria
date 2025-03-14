import { Injectable } from '@angular/core';
import { Partido } from '../modelos/partido.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  constructor(private http: HttpClient) {}
  listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${environment.url_gateway}/partido`);
  }
  eliminar(id: string) {
    return this.http.delete<Partido>(
      `${environment.url_gateway}/partido/${id}`
    );
  }
  getPartido(id: string): Observable<Partido> {
    return this.http.get<Partido>(
      `${environment.url_gateway}/partido/${id}`
    );
  }
  crear(partido: Partido) {
    return this.http.post(
      `${environment.url_gateway}/partido`,
      partido
    );
  }
  editar(id: string, partido: Partido) {
    return this.http.put(
      `${environment.url_gateway}/partido/${id}`,
      partido
    );
  }
}
