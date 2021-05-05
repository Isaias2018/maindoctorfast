import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryDetailComponent } from './medical-history-detail.component';

describe('DoctorPerfilComponent', () => {
  let component: MedicalHistoryDetailComponent;
  let fixture: ComponentFixture<MedicalHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
