import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealizadaCitasPatientComponent } from './list-realizadas-citas-patient.component';

describe('ListAvailableCitasPatientComponent', () => {
  let component: ListRealizadaCitasPatientComponent;
  let fixture: ComponentFixture<ListRealizadaCitasPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRealizadaCitasPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealizadaCitasPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
