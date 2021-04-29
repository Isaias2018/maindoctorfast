import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { Patient } from 'src/app/Model/Patient';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';
import { PatientService } from 'src/app/Services/Patient/patient.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-detail-history',
  templateUrl: './patient-detail-history.component.html',
  styleUrls: ['./patient-detail-history.component.scss']
})
export class PatientDetailHistoryComponent implements OnInit {

  patient : Patient = new Patient;
  public listMedicalHistory: Array<MedicalHistory> = new Array();

  constructor(config: NgbModalConfig, private modalService: NgbModal, private medicalHistoryService: MedicalHistoryService, private routes: Router) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit() {

  }

  open(content: any) {
    this.modalService.open(content);
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
