import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/Model/Cita';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { CitaService } from 'src/app/Services/Cita/cita.service';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  public listCitasMedicas: Array<Cita> = new Array();

  constructor(private citaService: CitaService) { }

  ngOnInit(): void {
    this.findMedicalHistory();
  }

  public findMedicalHistory()
  {
    this.citaService.findCitaMedicalHistory().subscribe(
      (data) => {
        this.listCitasMedicas = data;
      },
      (error) => {
        console.log('error al cargar el historial medico')
      }
    )
  }
}
