import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailHistoryComponent } from './patient-detail-history.component';

describe('DoctorPerfilComponent', () => {
  let component: PatientDetailHistoryComponent;
  let fixture: ComponentFixture<PatientDetailHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
