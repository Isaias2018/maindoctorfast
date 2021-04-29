import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/Model/Cita';
import { Doctor } from 'src/app/Model/Doctor';
import { Patient } from 'src/app/Model/Patient';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private urlPacienteCitas: string = 'paciente/citas';
  private urlDoctorCitas: string = 'doctor/citas';

  private urlDisponiblesDoctor: string = 'en_curso';
  private urlDisponiblesPaciente: string = 'en_curso';

  private urlPendientesCanceladasDoctor: string = 'por_confirmar';
  private urlPendientesCanceladasPaciente: string = 'por_confirmar';

  private urlHistorialPaciente: string = 'historial';


  private citaSelect: Cita = new Cita();
  private listCitasAvailable: Array<Cita> = new Array();

  private patient: Patient = new Patient();


  constructor(private authService: AuthService, private apiService: ApiService, private httpClient: HttpClient) {

  }

  public setCitaSelect(cita: Cita)
  {
    this.citaSelect = cita;
  }

  public getCitaSelect(): Cita
  {
    return this.citaSelect;
  }

  public setListCitasAvailable(listCitasAvailable: Array<Cita>)
  {
    this.listCitasAvailable = listCitasAvailable;
  }

  public getListCitasAvailable(): Array<Cita>
  {
    return this.listCitasAvailable;
  }



  public findCitasAvailablePaciente(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlPacienteCitas}/${this.urlDisponiblesPaciente}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }



  public findCitasPendientePaciente(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlPacienteCitas}/${this.urlPendientesCanceladasPaciente}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }

  public findCitasHistorialPaciente(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlPacienteCitas}/${this.urlHistorialPaciente}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }




  public findCitasAvailableDoctor(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlDoctorCitas}/${this.urlDisponiblesDoctor}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }


  public findCitasPendienteDoctor(): Observable<Cita[]>
  {
    return this.httpClient.get<Cita[]>(`${this.apiService.getUrl()}/${this.urlDoctorCitas}/${this.urlPendientesCanceladasDoctor}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }

}
