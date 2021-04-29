import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Model/Cita';
import { CitaService } from 'src/app/Services/Cita/cita.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-realizadas-citas-patient',
  templateUrl: './list-realizadas-citas-patient.component.html',
  styleUrls: ['./list-realizadas-citas-patient.component.scss']
})
export class ListRealizadaCitasPatientComponent implements OnInit {

  closeResult = '';
  public listCitas: Array<Cita> = new Array();



  constructor(private modalService: NgbModal,
    private citaService: CitaService, private router: Router) {}



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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }





}
