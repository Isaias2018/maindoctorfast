import { Appointment } from "./Appointment";
import { Cita } from "./Cita";
import { Diagnostic } from "./Diagnostic";
import { Doctor } from "./Doctor";
import { MedicalPrescription } from "./MedicalPrescription";
import { Patient } from "./Patient";
import { SymptomArea } from "./SymptomArea";

export class MedicalHistory {
    public cita: Cita =new Cita();
    public areaSintoma: SymptomArea;
    public doctor: Doctor;
    public paciente: Patient;
    public prescripcionMedica: MedicalPrescription;
    public diagnosticos: Array<Diagnostic>;

    public constructor() {

        this.areaSintoma = new SymptomArea();
        this.doctor = new Doctor();
        this.paciente = new Patient();
        this.prescripcionMedica = new MedicalPrescription();
        this.diagnosticos = new Array();
    }
}
