import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/MainPages/login/login.component';
import { DoctorComponent } from './Pages/SecondaryPages/mainPage/doctor/doctor.component';
import { PatientComponent } from './Pages/SecondaryPages/mainPage/patient/patient.component';
import { MainPageComponent } from './Pages/MainPages/main-page/main-page.component';
import { SingUpComponent } from './Pages/MainPages/sing-up/sing-up.component';
import { SingUpPatientComponent } from './Pages/SecondaryPages/SingUp/sing-up-patient/sing-up-patient.component';
import { SingUpDoctorComponent } from './Pages/SecondaryPages/SingUp/sing-up-doctor/sing-up-doctor.component';
import { MenuSingUpComponent } from './Components/Menu/menu-sing-up/menu-sing-up.component';
import { AlertSingUpComponent } from './Components/alert/alert-sing-up/alert-sing-up.component';
import { MainPatientComponent } from './Components/Patient/main-patient/main-patient.component';
import { MedicalAppointmentComponent } from './Components/Patient/medical-appointment/medical-appointment.component';
import { ListAvailableDoctorsComponent } from './Components/Patient/list-available-doctors/list-available-doctors.component';
import { SideBarPatientComponent } from './Components/SideBar/side-bar-patient/side-bar-patient.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { DoctorPerfilComponent } from './Components/Doctor/doctor-perfil/doctor-perfil.component';
import { ViewDoctorComponent } from './Components/Patient/view-doctor/view-doctor.component';
import { SideBarDoctorComponent } from './Components/SideBar/side-bar-doctor/side-bar-doctor.component';
import { MedicalHistoryComponent } from './Components/Patient/medical-history/medical-history.component';
import { from } from 'rxjs';
import { ListAvailableCitasPatientComponent } from './Components/Patient/list-available-citas-patient/list-available-citas-patient.component';
import { ListPendientesCanceladosCitasPatientComponent } from './Components/Patient/list-pendientes-canceladas-citas-patient/list-pendientes-cancelado-citas-patient.component';
import { ListRealizadaCitasPatientComponent } from './Components/Patient/list-realizadas-citas-patient/list-realizadas-citas-patient.component';
import { MainDoctorComponent } from './Components/Doctor/main-doctor/main-doctor.component';
import { ListAvailableCitasDoctorComponent } from './Components/Doctor/list-available-citas-doctor/list-available-citas-doctor.component';
import { ListPendientesCitasDoctorComponent } from './Components/Doctor/list-pendientes-citas-doctor/list-pendientes-citas-doctor.component';
import { PatientPerfilPropioComponent } from './Components/Patient/patient-perfil-propio/patient-perfil-propio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    MainPageComponent,
    SingUpComponent,
    SingUpDoctorComponent,
    SingUpPatientComponent,
    MenuSingUpComponent,
    AlertSingUpComponent,
    MainPatientComponent,
    MainDoctorComponent,
    ListAvailableCitasDoctorComponent,
    ListPendientesCitasDoctorComponent,
    MedicalAppointmentComponent,
    ListAvailableDoctorsComponent,
    ListAvailableCitasPatientComponent,
    ListPendientesCanceladosCitasPatientComponent,
    ListRealizadaCitasPatientComponent,
    SideBarPatientComponent,
    HeaderComponent,
    PatientPerfilPropioComponent,
    DoctorPerfilComponent,
    ViewDoctorComponent,
    SideBarDoctorComponent,
    MedicalHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDjxxNYD25pHhGHBYojnfDFUdKJYsDQ2w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
