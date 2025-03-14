import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from 'src/app/interceptores/token.interceptor';
import { MesascrComponent } from './components/mesascr/mesascr.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { PartidoscrComponent } from './components/partidoscr/partidoscr.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { CandidatoscrComponent } from './components/candidatoscr/candidatoscr.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ResultadoscrComponent } from './components/resultadoscr/resultadoscr.component';
import { SeguridadModule } from './components/seguridad/seguridad.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as bootstrap from "bootstrap";
import { NgModule } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';
import { SortPipe } from './sort.pipe';
import { CandidatoprComponent } from './components/candidatopr/candidatopr.component';
import { Reportea1Component } from './components/reportea1/reportea1.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseType } from 'd3-selection';
import { Reportea2Component } from './components/reportea2/reportea2.component';
import { ReportebComponent } from './components/reporteb/reporteb.component';
import { Reportec1Component } from './components/reportec1/reportec1.component';
import { Reportec2Component } from './components/reportec2/reportec2.component';
import { ReportedComponent } from './components/reported/reported.component'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptor } from './interceptores/spinner.interceptor';
import { SpinnerModule } from './components/spinner/spinner.module';
import * as $ from 'jquery';
import { UsuarioComponent } from './components/seguridad/usuario/usuario.component';
import { RolComponent } from './components/seguridad/rol/rol.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MesasComponent,
        LoginComponent,
        MesascrComponent,
        PartidosComponent,
        PartidoscrComponent,
        CandidatosComponent,
        CandidatoscrComponent,
        ResultadosComponent,
        ResultadoscrComponent,
        OrderByPipe,
        SortPipe,
        CandidatoprComponent,
        Reportea1Component,
        Reportea2Component,
        ReportebComponent,
        Reportec1Component,
        Reportec2Component,
        ReportedComponent,
        NosotrosComponent,
        MisionComponent,
        VisionComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        NgbModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: '', component: NosotrosComponent },
            { path: 'login', component: LoginComponent },
            { path: 'mesas', component: MesasComponent },
            { path: 'mesascr', component: MesascrComponent },
            { path: 'update/:id', component: MesascrComponent },
            { path: 'partidos', component: PartidosComponent },
            { path: 'partidoscr', component: PartidoscrComponent },
            { path: 'partidosup/:id', component: PartidoscrComponent },
            { path: 'candidatos', component: CandidatosComponent },
            { path: 'candidatoscr', component: CandidatoscrComponent },
            { path: 'candidatosup/:id', component: CandidatoscrComponent },
            { path: 'candidatopr/:id', component: CandidatoprComponent },
            { path: 'resultados', component: ResultadosComponent },
            { path: 'resultadoscr', component: ResultadoscrComponent },
            { path: 'resultadosup/:id', component: ResultadoscrComponent },
            { path: 'reportea1', component: Reportea1Component },
            { path: 'reportea2', component: Reportea2Component },
            { path: 'reporteb', component: ReportebComponent },
            { path: 'reportec1', component: Reportec1Component },
            { path: 'reportec2', component: Reportec2Component },
            { path: 'reported', component: ReportedComponent },
            { path: 'vision', component: VisionComponent },
            { path: 'mision', component: MisionComponent },
            { path: 'usuario', component: UsuarioComponent },
            { path: 'rol/:id', component: RolComponent },
            { path: 'rol', component: RolComponent },
            /*       {path: '**', component:PageNotFoundComponent}, */
        ]),
        SpinnerModule,
    ]
})
export class AppModule {}
