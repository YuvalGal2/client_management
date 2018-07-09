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
  /* initilization */
  user: Client = {
    id:this.clientservice.getClientsList().length,
    name:"",
    age:"",
    location:"",
    imagePath:""
  };
  /* initilization */
  constructor(private clientservice: ClientService) {}
  ngOnInit() {}




  addClient(user){
//because its an array its start from 0 and user id is starting from 1 so im adding 1 as default
    this.user.id = this.clientservice.getClientsList().length + 1;


    // in order to add the bootstrap "tag" element im letting the service know that i've added a client
    this.clientservice.addedClientsCounter++; 


    //calling the service function in order to push the client object inside the clients array.
    this.clientservice.addClient(user);

    //reset the form, changeing the status of the form to Submitted and therefor displaying the message
    this.isSubmitted = true;
    this.formControl.reset();
   // console.log(this.clientservice.getClients());
  }

}
 