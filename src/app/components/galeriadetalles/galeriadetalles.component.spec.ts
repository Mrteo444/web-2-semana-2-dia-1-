import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriadetallesComponent } from './galeriadetalles.component';
import { RouterLink } from '@angular/router';

describe('GaleriadetallesComponent', () => {
  let component: GaleriadetallesComponent;
  let fixture: ComponentFixture<GaleriadetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriadetallesComponent,RouterLink]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriadetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
