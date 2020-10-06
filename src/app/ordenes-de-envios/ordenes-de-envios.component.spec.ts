import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesDeEnviosComponent } from './ordenes-de-envios.component';

describe('OrdenesDeEnviosComponent', () => {
  let component: OrdenesDeEnviosComponent;
  let fixture: ComponentFixture<OrdenesDeEnviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesDeEnviosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesDeEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
