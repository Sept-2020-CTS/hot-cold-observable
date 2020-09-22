import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hot-obs',
  templateUrl: './hot-obs.component.html',
  styleUrls: ['./hot-obs.component.css']
})
export class HotObsComponent implements OnInit {

  @Input() obs : Observable<any>;

  subscription1 : Subscription;
  subscription2 : Subscription;

  connection1: Date;
  connection2: Date;

  values1 : number[] = [];
  values2 : number[] = [];

  err1: boolean = false;
  err2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  subscribeHot1(){
    this.connection1 = new Date();

    this.subscription1 = this.obs.subscribe((val) => {
      console.log("Subscribe cold 1 : ", val);
      this.values1.push(val);
    }, ({msg}) => {
      console.log("Error occured : ", msg);
      this.err1 = true;
    }, () =>{
      console.log("Completed");
    } );
  }

  subscribeHot2(){
    this.connection2 = new Date();

    this.subscription2 = this.obs.subscribe((val) => {
      console.log("Subscribe cold 2 : ", val);
      this.values2.push(val);
    }, ({msg}) => {
      console.log("Error occured : ", msg);
      this.err2 = true;
    }, () =>{
      console.log("Completed");
    } );
  }



}
