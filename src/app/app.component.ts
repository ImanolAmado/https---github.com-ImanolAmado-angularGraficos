import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgChartsModule } from 'ag-charts-angular';
import { AgBarSeriesOptions, AgChartCaptionOptions, AgChartOptions, } from 'ag-charts-community';
import { ApiService } from './services/api.service';

// Objetos con los datos que queremos recuperar
//
// Consulta de visitas por día
interface consultasDia {
  fecha : string;
  consultas : number;
}

// Consulta de los últimos accesos (usuarios logueados)
interface ultimosAccesos {  
  id_usuario : number;
  fecha: string;
}

// Consulta número de visitas por pestaña
interface  visitasPestana {
  pestana: string;
  visitas: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AgChartsModule],
  template: '<ag-charts [options]="visitasDia"/>'  
})


export class AppComponent implements OnInit {
  public visitasDia: AgChartOptions;

  // Inyecta el servicio en el constructor
  constructor(private apiService: ApiService) {

    this.visitasDia = {    
      title: {
        text: "Número de visitas por día"
      } as AgChartCaptionOptions,
      data: [], // Datos iniciales vacíos
      series: [
        {
          type: "bar",
          xKey: "fecha",
          yKey: "pestana"
        } as AgBarSeriesOptions,
      ]
    };
  }

 
  ngOnInit(): void {
    // llamada a la API
    this.apiService.getConsultasDias().subscribe(
      (data: consultasDia[]) => {        
       
        this.visitasDia = {
          ...this.visitasDia, 
          data: data 
        };
      },
      (error) => {
        console.error('Error al obtener los datos de la API:', error);
      }
    );
  }
}