import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendientesCitasDoctorComponent } from './list-pendientes-citas-doctor.component';

describe('ListAvailableCitasComponent', () => {
  let component: ListPendientesCitasDoctorComponent;
  let fixture: ComponentFixture<ListPendientesCitasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendientesCitasDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendientesCitasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
