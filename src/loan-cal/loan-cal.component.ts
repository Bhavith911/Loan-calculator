import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-loan-cal',
  imports: [FormsModule,CommonModule],
  templateUrl: './loan-cal.component.html',
  styleUrl: './loan-cal.component.scss'
})
export class LoanCalComponent {
  loanAmount: number = 14500000; 
  loanPeriod: number = 12; 
  interestRate: number = 10; 
  maxFunding: number = 17400000; 
  emi: number = 0; 

  constructor() {
    this.calculateEMI();
  }

  calculateEMI(): void {
    const P = this.loanAmount;
    const r = (this.interestRate / 100) / 12; 
    const n = this.loanPeriod;

    if (r > 0) {
      this.emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    } else {
      this.emi = Math.round(P / n);
    }
  }

  applyLoan(): void {
    console.log('Loan Amount:', this.loanAmount);
    console.log('Loan Period:', this.loanPeriod, 'Months');
    console.log('Interest Rate:', this.interestRate, '%');
    console.log('Calculated EMI:', this.emi);
  }
}
