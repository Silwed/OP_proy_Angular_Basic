import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosDetallePageComponent } from './contactos-detalle-page.component';

describe('ContactosDetallePageComponent', () => {
  let component: ContactosDetallePageComponent;
  let fixture: ComponentFixture<ContactosDetallePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactosDetallePageComponent]
    });
    fixture = TestBed.createComponent(ContactosDetallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
