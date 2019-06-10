import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any;
  
  constructor() { 

    this.user={
      name:'william',
      title:'Mr',
      address:'johannesburg',
       phone:['0827533263',
              '0765254977'
             ] 
    };
  }

  ngOnInit() {
  }

}
