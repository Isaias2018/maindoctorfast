import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPerfilPropioComponent } from './doctor-perfil-propio.component';

describe('DoctorPerfilComponent', () => {
  let component: DoctorPerfilPropioComponent;
  let fixture: ComponentFixture<DoctorPerfilPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPerfilPropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPerfilPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
