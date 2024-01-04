import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaFacturacionComponent } from './pantalla-facturacion.component';

describe('PantallaFacturacionComponent', () => {
  let component: PantallaFacturacionComponent;
  let fixture: ComponentFixture<PantallaFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
