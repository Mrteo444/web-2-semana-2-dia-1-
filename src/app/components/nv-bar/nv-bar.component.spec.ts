import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvBarComponent } from './nv-bar.component';

describe('NvBarComponent', () => {
  let component: NvBarComponent;
  let fixture: ComponentFixture<NvBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
