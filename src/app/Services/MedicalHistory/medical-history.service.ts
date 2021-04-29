import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/Model/Cita';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  private urlMedicalHistory: string = 'paciente/citas/historial_medico';

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public findMedicalHistory(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlMedicalHistory}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }



}
