import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { Patient } from 'src/app/Model/Patient';
import { PatientService } from 'src/app/Services/Patient/patient.service';

@Component({
  selector: 'app-patient-detail-history',
  templateUrl: './patient-detail-history.component.html',
  styleUrls: ['./patient-detail-history.component.scss']
})
export class PatientDetailHistoryComponent implements OnInit {

  patient: Patient = new Patient;
  medicalHistory : MedicalHistory = new MedicalHistory;

  constructor(private patientService: PatientService, private routes: Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){

    this.patientService.getPatientId()
    .subscribe(data=>{
      this.patient=data;
    })

  }
}
