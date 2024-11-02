import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitasDiaComponent } from './visitas-dia/visitas-dia.component';
import { PestanaVisitasComponent } from "./pestana-visitas/pestana-visitas.component";
import { UltimosAccesosComponent } from './ultimos-accesos/ultimos-accesos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    VisitasDiaComponent,
    PestanaVisitasComponent,
    UltimosAccesosComponent,
],
  template: `
    <div class="app-container">
      <visitas-dia></visitas-dia>
      <br><br><br>
      <pestana-visitas></pestana-visitas>    
      <br><br><br>      
      <ultimos-accesos></ultimos-accesos>
    </div>
  `
})
export class AppComponent {}