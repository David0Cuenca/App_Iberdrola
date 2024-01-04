import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaContratosComponent } from './pantalla-contratos.component';

describe('PantallaContratosComponent', () => {
  let component: PantallaContratosComponent;
  let fixture: ComponentFixture<PantallaContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaContratosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
