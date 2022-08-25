
export class Loans {

  public loanNumber: number;
  public customerId: number;
  public startDt: Date;
  public loanType: string;
  public totalLoan: number;
  public amountPaid: number;
  public outstandingAmount: number;
  
  constructor(loanNumber?: number,customerId?: number,startDt?: Date, loanType?: string,
    totalLoan?: number,amountPaid?: number, outstandingAmount?: number){
        this.loanNumber = loanNumber || 0;
        this.customerId = customerId || 0;
        this.startDt = startDt!;
        this.loanType = loanType || "";
        this.totalLoan = totalLoan || 0;
        this.amountPaid = amountPaid || 0;
        this.outstandingAmount = outstandingAmount || 0;
  }

}
