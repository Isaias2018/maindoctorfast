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
        component: DoctorComponent
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
            path: 'medical-history',
            component: MedicalHistoryComponent
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
