import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosPageComponent } from './contactos-page.component';

describe('ContactosPageComponent', () => {
  let component: ContactosPageComponent;
  let fixture: ComponentFixture<ContactosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactosPageComponent]
    });
    fixture = TestBed.createComponent(ContactosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
