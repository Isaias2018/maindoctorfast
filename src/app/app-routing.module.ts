import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Pages/SecondaryPages/mainPage/doctor/doctor.component';
import { LoginComponent } from './Pages/MainPages/login/login.component';
import { MainPageComponent } from './Pages/MainPages/main-page/main-page.component';
import { PatientComponent } from './Pages/SecondaryPages/mainPage/patient/patient.component';
import { SingUpComponent } from './Pages/MainPages/sing-up/sing-up.component';
import { SingUpDoctorComponent } from './Pages/SecondaryPages/SingUp/sing-up-doctor/sing-up-doctor.component';
import { SingUpPatientComponent } from './Pages/SecondaryPages/SingUp/sing-up-patient/sing-up-patient.component';
import { MainPatientComponent } from './Components/Patient/main-patient/main-patient.component';
import { MedicalAppointmentComponent } from './Components/Patient/medical-appointment/medical-appointment.component';
import { ListAvailableDoctorsComponent } from './Components/Patient/list-available-doctors/list-available-doctors.component';
import { ViewDoctorComponent } from './Components/Patient/view-doctor/view-doctor.component';
import { MedicalHistoryComponent } from './Components/Patient/medical-history/medical-history.component';
import { ListAvailableCitasPatientComponent } from './Components/Patient/list-available-citas-patient/list-available-citas-patient.component';
import { ListPendientesCanceladosCitasPatientComponent } from './Components/Patient/list-pendientes-canceladas-citas-patient/list-pendientes-cancelado-citas-patient.component';
import { ListRealizadaCitasPatientComponent } from './Components/Patient/list-realizadas-citas-patient/list-realizadas-citas-patient.component';
import { MainDoctorComponent } from './Components/Doctor/main-doctor/main-doctor.component';
import { ListAvailableCitasDoctorComponent } from './Components/Doctor/list-available-citas-doctor/list-available-citas-doctor.component';
import { ListPendientesCitasDoctorComponent } from './Components/Doctor/list-pendientes-citas-doctor/list-pendientes-citas-doctor.component';
import { DoctorPerfilPropioComponent } from './Components/Doctor/doctor-perfil-propio/doctor-perfil-propio.component';
import { PatientPerfilPropioComponent } from './Components/Patient/patient-perfil-propio/patient-perfil-propio.component';
import { MedicalHistoryDetailComponent } from './Components/Patient/medical-history-detail/medical-history-detail.component';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: ''
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingUpComponent,
    children: [
      {
        path: 'doctor',
        component: SingUpDoctorComponent
      },
      {
        path: 'patient',
        component: SingUpPatientComponent
      }
    ]
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: 'main-doctor',
            redirectTo: ''
          },
          {
            path: '',
            component: MainDoctorComponent
          },
          {
            path: 'list-available-citas-doctor',
            component: ListAvailableCitasDoctorComponent
          },
          {
            path: 'list-pendientes-citas-doctor',
            component: ListPendientesCitasDoctorComponent
          },
          {
            path: 'doctor-perfil-propio',
            component: DoctorPerfilPropioComponent
          }

        ]
      },
      {
        path: 'patient',
        component: PatientComponent,
        children: [
          {
            path: 'main-patient',
            redirectTo: ''
          },
          {
            path: '',
            component: MainPatientComponent
          },
          {
            path: 'medical-appointment',
            component: MedicalAppointmentComponent
          },
          {
            path: 'list-available-doctor',
            component: ListAvailableDoctorsComponent
          },
          {
            path: 'list-available-citas-patient',
            component: ListAvailableCitasPatientComponent
          },
          {
            path: 'list-pendientes-cancelados-citas-patient',
            component: ListPendientesCanceladosCitasPatientComponent
          },
          {
            path: 'list-realizadas-citas-patient',
            component: ListRealizadaCitasPatientComponent
          },
          {
            path: 'view-doctor',
            component: ViewDoctorComponent
          },
          {
            path: 'view-medicalHistory',
            component: MedicalHistoryDetailComponent
          },
          {
            path: 'medical-history',
            component: MedicalHistoryComponent
          },
          {
            path: 'patient-perfil-propio',
            component: PatientPerfilPropioComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
