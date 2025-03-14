import { Injectable } from '@angular/core';
import { Resultado } from '../modelos/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  constructor(private http: HttpClient) {}
  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultado`);
  }
  eliminar(id: string) {
    return this.http.delete<Resultado>(
      `${environment.url_gateway}/resultado/${id}`
    );
  }
  getResultado(id: string): Observable<Resultado> {
    return this.http.get<Resultado>(
      `${environment.url_gateway}/resultado/${id}`
    );
  }
  crear(resultado: Resultado, point:Resultado) {
    return this.http.post(
      `${environment.url_gateway}/resultado/candidato/${point.id_candidato}/mesa/${point.id_mesa}`,
      resultado
    );
  }
  editar(id: string, resultado: Resultado) {
    return this.http.put(
      `${environment.url_gateway}/resultado/${id}`,
      resultado
    );
  }
}
/* id_candidato:string, id_mesa:string, id_candidato:string, id_mesa:string,  */
