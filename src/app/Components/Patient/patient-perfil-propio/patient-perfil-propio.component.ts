import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/Patient';
import { PatientService } from 'src/app/Services/Patient/patient.service';

@Component({
  selector: 'app-patient-perfil-propio',
  templateUrl: './patient-perfil-propio.component.html',
  styleUrls: ['./patient-perfil-propio.component.scss']
})
export class PatientPerfilPropioComponent implements OnInit {

  patient: Patient = new Patient;

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
