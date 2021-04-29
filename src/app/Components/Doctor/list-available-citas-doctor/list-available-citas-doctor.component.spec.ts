import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableCitasDoctorComponent } from './list-available-citas-doctor.component';

describe('ListAvailableCitasComponent', () => {
  let component: ListAvailableCitasDoctorComponent;
  let fixture: ComponentFixture<ListAvailableCitasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableCitasDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailableCitasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
