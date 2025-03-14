import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/servicios/reportes.service';


@Component({
  selector: 'app-reportea1',
  templateUrl: './reportea1.component.html',
  styleUrls: ['./reportea1.component.css']
})
export class Reportea1Component implements OnInit {
  reportea1: any [] = [];
  grafico: any;
  view: [number, number] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'CANDIDATOS';
  showYAxisLabel = true;
  yAxisLabel = 'VOTOS';

  constructor(private servicioReporte: ReporteService) { }

  ngOnInit(): void {
    this.listar();
    
  }
  listar(): void {
    this.servicioReporte.listara1().subscribe((data) => {
      this.reportea1 = data;
      console.log(this.grafico);
      for (let item of this.reportea1){
        console.log(item.doc.candidato.nombre_apellido);
        this.grafico.push({ 'name': item.doc.candidato.nombre_apellido, 'value': item.total });
        
      
      }
      console.log(this.grafico);
/*       for (let item of this.reportea1) {
        this.grafico.push({ 'name': item.doc.candidato.nombre_apellido, 'value': item.total });
      }
      this.grafico.sort(function (a, b) {
        if (a.value < b.value) {
          return 1;
        }
        if (a.value > b.value) {
          return -1;
        }
        return 0;
      }); */
    });
  }
  onSelect(event: any) {
  }
}
