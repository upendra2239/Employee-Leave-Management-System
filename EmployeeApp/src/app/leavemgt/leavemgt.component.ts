import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../shared/leave.service';
import { Leave } from '../shared/leave.model';

declare var M: any;

@Component({
  selector: 'app-leavemgt',
  templateUrl: './leavemgt.component.html',
  styleUrls: ['./leavemgt.component.css']
})
export class LeavemgtComponent implements OnInit {

  constructor(public leaveService: LeaveService) { }

  ngOnInit() {
    this.refreshLeaveList();
  }

  refreshLeaveList() {
    this.leaveService.getLeaveList().subscribe((res) => {
      this.leaveService.leaves = res as Leave[];
    });
  }
  onAccept(_id: string) {
      this.leaveService.deleteLeave(_id).subscribe((res) => {
        this.refreshLeaveList();
        M.toast({ html: 'Accepted successfully', classes: 'blue rounded' });
      });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to reject this request ?') == true) {
      this.leaveService.deleteLeave(_id).subscribe((res) => {
        this.refreshLeaveList();
        M.toast({ html: 'Rejected successfully', classes: 'blue rounded' });
      });
    }
  }

}
