import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalComponent } from './loan-cal.component';

describe('LoanCalComponent', () => {
  let component: LoanCalComponent;
  let fixture: ComponentFixture<LoanCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanCalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
