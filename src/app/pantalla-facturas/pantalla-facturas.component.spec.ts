import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaFacturasComponent } from './pantalla-facturas.component';

describe('PantallaFacturasComponent', () => {
  let component: PantallaFacturasComponent;
  let fixture: ComponentFixture<PantallaFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaFacturasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
