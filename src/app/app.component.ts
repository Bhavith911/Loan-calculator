import { Component } from '@angular/core';
import { LoanCalComponent } from '../loan-cal/loan-cal.component';

@Component({
  selector: 'app-root',
  imports: [LoanCalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'loan-calculator';
}
