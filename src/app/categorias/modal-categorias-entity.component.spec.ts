import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoriasEntityComponent } from './modal-categorias-entity.component';

describe('ModalCategoriasEntityComponent', () => {
  let component: ModalCategoriasEntityComponent;
  let fixture: ComponentFixture<ModalCategoriasEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCategoriasEntityComponent]
    });
    fixture = TestBed.createComponent(ModalCategoriasEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
