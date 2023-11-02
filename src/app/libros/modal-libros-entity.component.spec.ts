import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLibrosEntityComponent } from './modal-libros-entity.component';

describe('ModalLibrosEntityComponent', () => {
  let component: ModalLibrosEntityComponent;
  let fixture: ComponentFixture<ModalLibrosEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLibrosEntityComponent]
    });
    fixture = TestBed.createComponent(ModalLibrosEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
