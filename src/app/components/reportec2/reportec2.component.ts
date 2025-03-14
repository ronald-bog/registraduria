import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/modelos/reporte.model';
import { ReporteService } from 'src/app/servicios/reportes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MesaService } from 'src/app/servicios/mesa.service';

@Component({
  selector: 'app-reportec2',
  templateUrl: './reportec2.component.html',
  styleUrls: ['./reportec2.component.css']
})
export class Reportec2Component implements OnInit {
  reportec2:any;
  mesas:any;
  point: any = {
    id_mesa:"",
    numero_mesa:""
  }
  view: [number,number] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'CANDIDATOS';
  showYAxisLabel = true;
  yAxisLabel = 'VOTOS';

  constructor(private servicioReporte: ReporteService, private router: Router, private servicioMesa: MesaService) {}

  ngOnInit(): void {
    this.listarmesa();
/*     this.listar(); */
  }
  listar(id:string): void {
    this.servicioReporte.listarc2(id).subscribe((data) => {
      this.reportec2 = data;
    });
  }
  listarmesa(): void {
    this.servicioMesa.listar().subscribe((data) => {
      this.mesas = data;
    });
  }
  onSelect(event:any) {
    console.log(event);
  }
}
