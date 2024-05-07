import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosComponent } from './nosotros.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { Tabla1Component } from '../../components/tabla1/tabla1.component';

describe('NosotrosComponent', () => {
  let component: NosotrosComponent;
  let fixture: ComponentFixture<NosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosComponent , FormularioComponent,Tabla1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
