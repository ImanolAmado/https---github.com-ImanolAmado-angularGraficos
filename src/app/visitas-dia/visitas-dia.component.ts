import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgChartsModule } from 'ag-charts-angular';
import { AgBarSeriesOptions, AgChartCaptionOptions, AgChartOptions, } from 'ag-charts-community';
import { ApiService } from '../services/api.service';

// Objetos con los datos que queremos recuperar
//
// Consulta de visitas por día
interface consultasDia {
  fecha : string;
  consultas : number;
}

@Component({
  selector: 'visitas-dia',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AgChartsModule],
  template: '<ag-charts [options]="chartOptions"/>'  
})


export class VisitasDiaComponent implements OnInit {
  public chartOptions: AgChartOptions;

  // Inyecta el servicio que hemos creado
  constructor(private apiService: ApiService) {
    
    this.chartOptions = {    
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

        console.log(data);
       
        this.chartOptions = {
          ...this.chartOptions, 
          data: data 
        };
      },
      (error) => {
        console.error('¡Error!', error);
      }
    );
  }
}