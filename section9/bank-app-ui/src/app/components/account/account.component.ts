import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { User } from 'src/app/model/user.model';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    if(this.user){
      this.dashboardService.getAccountDetails(this.user.id).subscribe(
        responseData => {
        this.account = <any> responseData.body;
        });
    }

  }

}
