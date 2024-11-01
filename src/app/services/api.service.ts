import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // NOTA: URL de la api
  private apiUrl = 'https://localhost:7073';

  constructor(private http: HttpClient) { }

 // Método para obtener datos de /GetConsultasDias
 getConsultasDias(): Observable<any> {
  return this.http.get(`${this.apiUrl}/GetConsultasDias`);
 }

// Método para obtener los datos de /GetPestanaVisitas
 getPestanaVisitas(): Observable<any> {
  return this.http.get(`${this.apiUrl}/GetPestanaVisitas`); 
}

// Método para obtener los datos de /GetUltimosAccesos
 getUltimosAccesos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/GetUltimosAccesos`); 
}


}
