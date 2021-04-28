import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendientesCanceladosCitasPatientComponent } from './list-pendientes-cancelado-citas-patient.component';

describe('ListAvailableCitasPatientComponent', () => {
  let component: ListPendientesCanceladosCitasPatientComponent;
  let fixture: ComponentFixture<ListPendientesCanceladosCitasPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendientesCanceladosCitasPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendientesCanceladosCitasPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
