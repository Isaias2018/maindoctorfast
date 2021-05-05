import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diagnostic } from 'src/app/Model/Diagnostic';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  public listMedicalHistory: Array<MedicalHistory> = new Array();
  public listDiagnosticos: Array<Diagnostic> = new Array();

  constructor(private medicalHistoryService: MedicalHistoryService, private router: Router) { }

  ngOnInit(): void {
    this.findMedicalHistory();
  }





  public viewMedicalHistory(medicalHistory: MedicalHistory)
  {
    this.medicalHistoryService.setMedicalHistorySelect(medicalHistory);
    this.router.navigateByUrl('main/patient/medical-history-detail');
  }




  public findMedicalHistory()
  {
    this.medicalHistoryService.findMedicalHistory().subscribe(
      (data) => {
        this.listMedicalHistory = data;

      },
      (error) => {
        console.log('error al cargar el historial medico')
      }
    )
  }
}
