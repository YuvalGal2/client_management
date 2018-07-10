import  {Client} from '../client/client';
import { ClientService } from './../client/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})

export class FormComponent implements OnInit {
@ViewChild('form') formControl;
isSubmitted:boolean = false;
/* initalization */
  user:Client;


  constructor(private clientservice: ClientService) {}
  ngOnInit() {}




  addClient(form:NgForm){
    const formValue = form.value;
    this.user = {
      id:this.clientservice.getClientsList().length + 1,
      age:formValue.age,
      name:formValue.name,
      location:formValue.location,
      imagePath:formValue.path
    };


    // in order to add the bootstrap "tag" element im letting the service know that i've added a client
    this.clientservice.addedClientsCounter++; 


    //calling the service function in order to push the user(added) object inside the clients array.
    this.clientservice.addClient(this.user);

    //reset the form, changeing the status of the form to Submitted and therefor displaying the message
    this.isSubmitted = true;
    this.formControl.reset();
  }

}
 