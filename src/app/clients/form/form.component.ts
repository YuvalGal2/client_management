import  {Client} from '../client/client';
import { ClientService } from './../client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})

export class FormComponent implements OnInit {


  constructor(private clientservice: ClientService) {
  
  }
  user: Client = {
    name:"",
    age:"",
    location:"",
    imagePath:""
  };

  ngOnInit() {}
  addClient(user){
  
    this.clientservice.addClient(user);
   // console.log(this.clientservice.getClients());
  }

}
 