import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/Doctor';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-doctor-perfil-propio',
  templateUrl: './doctor-perfil-propio.component.html',
  styleUrls: ['./doctor-perfil-propio.component.scss']
})
export class DoctorPerfilPropioComponent implements OnInit {

  doctor: Doctor = this.doctorService.getDoctorSelect();

  constructor(private doctorService: DoctorService, private routes: Router) { }

  ngOnInit(): void {

  }
}
