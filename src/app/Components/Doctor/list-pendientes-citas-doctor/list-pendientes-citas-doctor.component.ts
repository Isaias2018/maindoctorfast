import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Model/Cita';
import { User } from 'src/app/Model/User';
import { CitaService } from 'src/app/Services/Cita/cita.service';



@Component({
  selector: 'app-list-pendientes-citas-doctor',
  templateUrl: './list-pendientes-citas-doctor.component.html',
  styleUrls: ['./list-pendientes-citas-doctor.component.scss']
})
export class ListPendientesCitasDoctorComponent implements OnInit {

  public listCitas: Array<Cita> = new Array();
  constructor(private citaService: CitaService, private router: Router) {

  }

  ngOnInit(): void {
    this.findCitasAvailable();
    this.listCitas = this.citaService.getListCitasAvailable();
  }

  public viewDocto(cita: Cita)
  {
    this.citaService.setCitaSelect(cita);
    this.router.navigateByUrl('main/patient/view-doctor');
  }

  findCitaspendientesCanceladas()
  {
      let id = localStorage.getItem("usuario_id")
      this.citaService.findCitasPendienteDoctor().subscribe(
      (data) => {
        this.listCitas = data;
        this.citaService.setListCitasPendiente(data);
      }
    )
  }

}
