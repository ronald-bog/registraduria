import { Component, OnInit } from '@angular/core';
import { window } from 'd3-selection';
import { windowToggle } from 'rxjs';
import { Usuario } from './modelos/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'registraduria';

  constructor() { }

  ngOnInit(): void {
  }
}
