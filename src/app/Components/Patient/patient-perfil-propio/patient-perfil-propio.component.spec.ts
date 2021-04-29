import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPerfilPropioComponent } from './patient-perfil-propio.component';

describe('DoctorPerfilComponent', () => {
  let component: PatientPerfilPropioComponent;
  let fixture: ComponentFixture<PatientPerfilPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPerfilPropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPerfilPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
