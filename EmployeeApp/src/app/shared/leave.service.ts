import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Leave } from './leave.model';

@Injectable()
export class LeaveService {
  selectedLeave: Leave;
  leaves: Leave[];
  readonly baseURL = 'http://localhost:3000/leaves';

  constructor(private http: HttpClient) { }

  postLeave(lev: Leave) {
    return this.http.post(this.baseURL, lev);
  }

  getLeaveList() {
    return this.http.get(this.baseURL);
  }

  putLeave(lev: Leave) {
    return this.http.put(this.baseURL + `/${lev._id}`, lev);
  }

  deleteLeave(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}