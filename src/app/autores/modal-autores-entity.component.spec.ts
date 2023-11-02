import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutoresEntityComponent } from './modal-autores-entity.component';

describe('ModalAutoresEntityComponent', () => {
  let component: ModalAutoresEntityComponent;
  let fixture: ComponentFixture<ModalAutoresEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAutoresEntityComponent]
    });
    fixture = TestBed.createComponent(ModalAutoresEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
