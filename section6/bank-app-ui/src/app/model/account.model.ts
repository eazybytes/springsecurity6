
export class Account {

  public customerId: number;
  public accountNumber: number;
  public accountType: string;
  public branchAddress: string;
  

  constructor(customerId?: number,accountNumber?: number,accountType?: string, branchAddress?: string){
        this.customerId = customerId || 0;
        this.accountNumber = accountNumber || 0;
        this.accountType = accountType || '';
        this.branchAddress = branchAddress || '';
  }

}
