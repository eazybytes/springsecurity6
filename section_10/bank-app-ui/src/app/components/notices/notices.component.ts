import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/model/cards.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  notices = new Array();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getNoticeDetails().subscribe(
      responseData => {
      this.notices = <any> responseData.body;
      });
  }

}
