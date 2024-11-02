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
  template: '<ag-grid-angular class="ag-theme-quartz" style="height: 500px;" [rowData]="rowData" [columnDefs]="colDefs" [pagination]="pagination" [paginationPageSize]="paginationPageSize"></ag-grid-angular>'
  
})

// Clase que implementa OnInit
export class UltimosAccesosComponent implements OnInit {

  pagination = true;
  paginationPageSize=20;  
  //paginationPageSizeSelector = [10-20]
  
  constructor(private apiService: ApiService) {} 
  
  rowData: ultimosAccesos[] = []; 
  
  colDefs: ColDef<ultimosAccesos>[] = [ 
    { field: 'id_usuario' },
    { field: 'fecha' }
  ]; 

  defaultColDef: ColDef = { 
    flex: 1,
  };


ngOnInit(): void {
  // llamada a la API
  this.apiService.getUltimosAccesos().subscribe(
    (data: ultimosAccesos[]) => {

      // Devuelve el valor
      console.log(data);
      this.rowData = data;    
     
    },
    (error) => {
      console.error('¡Error!', error);
    }
  );
}

}

/*
colDefs: ColDef[] = [
  { field: "Id_usuario" },
  { field: "Fecha" },
  
];
}
*/

