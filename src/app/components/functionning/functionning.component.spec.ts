import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionningComponent } from './functionning.component';

describe('FunctionningComponent', () => {
  let component: FunctionningComponent;
  let fixture: ComponentFixture<FunctionningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
