import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  na:undefined | string=undefined;
  pass: undefined | string=undefined;
  arr: any=[];
  constructor(private _activateroute:ActivatedRoute,private _service:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this._activateroute.params.subscribe((parameter:Params)=>{
      this.na=parameter['name'];
      this.pass=parameter['pass'];
      //console.log(this.na)
    })
    console.log(this.na)
    this.arr=this._service.showNotes(this.na, this.pass) ;
  }
}
