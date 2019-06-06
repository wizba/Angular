import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message:String;
  myNumber:number=100;

  constructor() { 
    setInterval(()=>{
      this.message=new Date().toDateString()+' '+new Date().toLocaleTimeString();
    },1000);
    
    setInterval(()=>{
      this.myNumber++;
    },1000);
  }

  ngOnInit() {
  }

  add(a:number ,b:number)
  {
    return a+b;
  }

}
