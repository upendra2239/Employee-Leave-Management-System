import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveService } from '../shared/leave.service';
import { Leave } from '../shared/leave.model';

declare var M: any;

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {

  constructor(public leaveService: LeaveService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.leaveService.selectedLeave = {
      _id: "",
      name: "",
      position: "",
      office: "",
      days: "",
      reason: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.leaveService.postLeave(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Request sent successfully', classes: 'blue rounded' });
      });
    }
  }

}
