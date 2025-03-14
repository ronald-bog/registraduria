import { Injectable } from '@angular/core';
import { Mesa } from '../modelos/mesa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MesaService {
  constructor(private http: HttpClient) { }
  listar(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${environment.url_gateway}/mesa`);
  }
  eliminar(id: string) {
    return this.http.delete<Mesa>(
      `${environment.url_gateway}/mesa/${id}`
    );
  }
  getMesa(id: string): Observable<Mesa> {
    return this.http.get<Mesa>(
      `${environment.url_gateway}/mesa/${id}`
    );
  }
  crear(mesa: Mesa) {
    return this.http.post(
      `${environment.url_gateway}/mesa`,
      mesa
    );
  }
  editar(id: string, mesa: Mesa) {
    return this.http.put(
      `${environment.url_gateway}/mesa/${id}`,
      mesa
    );
  }
}
