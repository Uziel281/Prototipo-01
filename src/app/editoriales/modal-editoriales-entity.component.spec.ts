import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditorialesEntityComponent } from './modal-editoriales-entity.component';

describe('ModalEditorialesEntityComponent', () => {
  let component: ModalEditorialesEntityComponent;
  let fixture: ComponentFixture<ModalEditorialesEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditorialesEntityComponent]
    });
    fixture = TestBed.createComponent(ModalEditorialesEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
