
export class Contact {

  public contactId: string;
  public contactName: string;
  public contactEmail: string;
  public subject: string;
  public message: string;
  
  constructor(contactId?: string,contactName?: string,contactEmail?: string,
    subject?: string,message?: string){
        this.contactId = contactId || '';
        this.contactName = contactName || '';
        this.contactEmail = contactEmail || '';
        this.subject = subject || '';
        this.message = message || '';
        
  }

}
