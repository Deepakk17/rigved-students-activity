import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-delete',
  templateUrl: './activity-delete.component.html',
  styleUrls: ['./activity-delete.component.css']
})
export class ActivityDeleteComponent implements OnInit {

  constructor(private service: UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  deleteUser() {
    this.service.delete(this.id.value);
    this._router.navigate(["usersList"]);
  }

}
