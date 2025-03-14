import { Injectable } from '@angular/core';
import { Candidato } from '../modelos/candidato.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  constructor(private http: HttpClient) {}
  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidato`);
  }
  eliminar(id: string) {
    return this.http.delete<Candidato>(
      `${environment.url_gateway}/candidato/${id}`
    );
  }
  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(
      `${environment.url_gateway}/candidato/${id}`
    );
  }
  crear(candidato: Candidato) {
    return this.http.post(
      `${environment.url_gateway}/candidato`,
      candidato
    );
  }
  editar(id: string, candidato: Candidato) {
    return this.http.put(
      `${environment.url_gateway}/candidato/${id}`,
      candidato
    );
  }
  asignar(id: string, point: Candidato,candidato: Candidato) {
    return this.http.put(
      `${environment.url_gateway}/candidato/${id}/partido/${point.id_partido}`,
      candidato
    );
  }
}
