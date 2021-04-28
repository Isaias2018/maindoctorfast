import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Model/Cita';
import { User } from 'src/app/Model/User';
import { CitaService } from 'src/app/Services/Cita/cita.service';



@Component({
  selector: 'app-list-realizadas-citas-patient',
  templateUrl: './list-realizadas-citas-patient.component.html',
  styleUrls: ['./list-realizadas-citas-patient.component.scss']
})
export class ListRealizadaCitasPatientComponent implements OnInit {


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

  public findCitasAvailable()
  {

      this.citaService.findCitasAvailablePaciente().subscribe(
      (data) => {
        this.listCitas = data;
        this.citaService.setListCitasAvailable(data);
      }
    )
  }

}
