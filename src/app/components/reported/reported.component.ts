import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/modelos/reporte.model';
import { ReporteService } from 'src/app/servicios/reportes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.css']
})
export class ReportedComponent implements OnInit {
  reported:any;
  view: [number,number] = [700, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  constructor(private servicioReporte: ReporteService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.servicioReporte.listard().subscribe((data) => {
      this.reported = data;
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
