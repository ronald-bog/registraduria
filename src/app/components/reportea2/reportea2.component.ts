import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/modelos/reporte.model';
import { ReporteService } from 'src/app/servicios/reportes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MesaService } from 'src/app/servicios/mesa.service';

@Component({
  selector: 'app-reportea2',
  templateUrl: './reportea2.component.html',
  styleUrls: ['./reportea2.component.css']
})
export class Reportea2Component implements OnInit {
  reportea1: any;
  mesas: any;
  point: any = {
    id_mesa: "",
    numero_mesa: ""
  }
  view: [number, number] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'CANDIDATOS';
  showYAxisLabel = true;
  yAxisLabel = 'VOTOS';

  constructor(private servicioReporte: ReporteService, private router: Router, private servicioMesa: MesaService) { }

  ngOnInit(): void {
    this.listarmesa();
  }
  listar(id: string): void {
    this.servicioReporte.listara2(id).subscribe((data) => {
      this.reportea1 = data;
    });
  }
  listarmesa(): void {
    this.servicioMesa.listar().subscribe((data) => {
      this.mesas = data;
    });
  }
  onSelect(event: any) {
    console.log(event);
  }
}
