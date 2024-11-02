import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';


// Objetos con los datos que queremos recuperar
//
// Consulta de Últimos accesos
interface ultimosAccesos {  
  id_usuario: number;
  fecha : string;
}

@Component({
  selector: 'ultimos-accesos',
  standalone: true,
  imports: [AgGridAngular],
  styleUrls: ['../../styles.css'],
  template: '<ag-grid-angular class="ag-theme-quartz" style="height: 500px;" [rowData]="rowData" [columnDefs]="colDefs"></ag-grid-angular>',
  
})

export class UltimosAccesosComponent  {

  // Row Data: The data to be displayed.
 rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
];
}


