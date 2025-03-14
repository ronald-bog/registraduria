import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay">
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`,
  styleUrls: ['./spinner.component.css'],
  providers:[SpinnerService]
})
export class SpinnerComponent implements OnInit {
  /* isLoading$ = this.spinnerSvc.isLoading$; */
  constructor() {}

  ngOnInit(): void {}
}
/* private spinnerSvc: SpinnerService */

/* *ngIf="isLoading$ | async" */
