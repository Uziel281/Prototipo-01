import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLectoresEntityComponent } from './modal-lectores-entity.component';

describe('ModalLectoresEntityComponent', () => {
  let component: ModalLectoresEntityComponent;
  let fixture: ComponentFixture<ModalLectoresEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLectoresEntityComponent]
    });
    fixture = TestBed.createComponent(ModalLectoresEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
