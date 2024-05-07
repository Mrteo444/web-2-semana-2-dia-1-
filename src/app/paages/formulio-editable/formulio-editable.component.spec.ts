import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulioEditableComponent } from './formulio-editable.component';

describe('FormulioEditableComponent', () => {
  let component: FormulioEditableComponent;
  let fixture: ComponentFixture<FormulioEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulioEditableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulioEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
