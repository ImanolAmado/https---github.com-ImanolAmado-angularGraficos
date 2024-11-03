import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgChartsModule } from 'ag-charts-angular';
import { AgBarSeriesOptions, AgChartCaptionOptions, AgChartOptions, } from 'ag-charts-community';
import { ApiService } from '../services/api.service';


// Objetos con los datos que queremos recuperar
//
// Consulta de visitas por día
interface pestanaVisitas {
  pestana : string;
  visitas: number;
}

@Component({
  selector: 'pestana-visitas',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AgChartsModule],
  template: '<ag-charts [options]="chartOptions"/>'  
  
})
export class PestanaVisitasComponent implements OnInit {
  public chartOptions:AgChartOptions;
  // Inyecta el servicio que hemos creado
  constructor(private apiService: ApiService) {
    
    this.chartOptions = {    
      title: {
        text: "Visitas por pestaña"
      } as AgChartCaptionOptions,
      data: [], // Datos iniciales vacíos
      series: [
        {
          type: "bar",
          xKey: "pestana",
          yKey: "visitas"
        } as AgBarSeriesOptions,
      ]
    };
  }

 
  ngOnInit(): void {
    // llamada a la API
    this.apiService.getPestanaVisitas().subscribe(
      (data: pestanaVisitas[]) => {

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


