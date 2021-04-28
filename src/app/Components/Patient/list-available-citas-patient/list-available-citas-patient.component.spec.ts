import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableCitasPatientComponent } from './list-available-citas-patient.component';

describe('ListAvailableCitasPatientComponent', () => {
  let component: ListAvailableCitasPatientComponent;
  let fixture: ComponentFixture<ListAvailableCitasPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableCitasPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailableCitasPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
