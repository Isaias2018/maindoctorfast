import { Doctor } from "./Doctor";
import { MedicalPrescription } from "./MedicalPrescription";
import { Patient } from "./Patient";
import { SymptomArea } from "./SymptomArea";



export class Cita {
  public horaInicio: string;
  public horaFin: string;
  public codigoCita: string;
  public fechaCita: string;
  public areaSintoma: SymptomArea;
  public doctor: Doctor;
  public patient: Patient;
  public prescripcionMedica: MedicalPrescription;
  public status: number;


    public constructor()
    {
        this.horaInicio = '';
        this.horaFin = '';
        this.codigoCita = '';
        this.fechaCita = '';
        this.areaSintoma = new SymptomArea();
        this.doctor = new Doctor();
        this.patient = new Patient();
        this.prescripcionMedica = new MedicalPrescription();
        this.status = 1;
    }
}
