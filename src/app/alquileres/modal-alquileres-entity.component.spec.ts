import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlquileresEntityComponent } from './modal-alquileres-entity.component';

describe('ModalAlquileresEntityComponent', () => {
  let component: ModalAlquileresEntityComponent;
  let fixture: ComponentFixture<ModalAlquileresEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAlquileresEntityComponent]
    });
    fixture = TestBed.createComponent(ModalAlquileresEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
