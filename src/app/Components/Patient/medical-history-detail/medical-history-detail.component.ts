import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diagnostic } from 'src/app/Model/Diagnostic';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { Patient } from 'src/app/Model/Patient';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';
import { PatientService } from 'src/app/Services/Patient/patient.service';

@Component({
  selector: 'app-medical-history-detail',
  templateUrl: './medical-history-detail.component.html',
  styleUrls: ['./medical-history-detail.component.scss']
})
export class MedicalHistoryDetailComponent implements OnInit {

  medicalHistory: MedicalHistory = this.medicalHistoryService.getMedicalHistorySelect();
  public listDiagnosticos: Array<Diagnostic> = new Array();

  constructor(private medicalHistoryService: MedicalHistoryService, private routes: Router) { }

  ngOnInit() {

  }

}
