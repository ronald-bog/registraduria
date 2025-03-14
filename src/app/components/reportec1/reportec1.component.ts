import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/modelos/reporte.model';
import { ReporteService } from 'src/app/servicios/reportes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportec1',
  templateUrl: './reportec1.component.html',
  styleUrls: ['./reportec1.component.css']
})
export class Reportec1Component implements OnInit {
  reportec1:any;
  view: [number,number] = [700, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  constructor(private servicioReporte: ReporteService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioReporte.listarc1().subscribe((data) => {
      this.reportec1 = data;
    });
  }
  onSelect(event:any) {
    console.log(event);
  }
  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
