import  {Client} from '../client/client';
import { ClientService } from './../client/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})

export class FormComponent implements OnInit {
@ViewChild('form') formControl;
isSubmitted:boolean = false;

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

    // in order to add the bootstrap "tag" element im letting the service know that i've added a client
    this.clientservice.addedClientsCounter++; 
    this.clientservice.addClient(user);
    console.log(this.clientservice.addedClientsCounter);
    this.isSubmitted = true;
    this.formControl.reset();
   // console.log(this.clientservice.getClients());
  }

}
 