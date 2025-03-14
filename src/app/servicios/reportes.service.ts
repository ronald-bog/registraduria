import { Injectable } from '@angular/core';
import { Reporte } from '../modelos/reporte.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  constructor(private http: HttpClient) {}
  listara1(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/votos_mayores`);
  }
  listara2(id:string): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/votos_mayores/mesa/${id}`);
  }
  listarb(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/mesa`);
  }
  listarc1(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/partidos_votos`);
  }
  listarc2(id:string): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/partidos_votos/mesa/${id}`);
  }
  listard(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${environment.url_gateway}/resultado/distribucion`);
  }
}
