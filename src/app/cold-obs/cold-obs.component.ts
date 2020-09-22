import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { compileComponentFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-cold-obs',
  templateUrl: './cold-obs.component.html',
  styleUrls: ['./cold-obs.component.css']
})
export class ColdObsComponent implements OnInit {

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

  subscribeCold1(){
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

  subscribeCold2(){
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
