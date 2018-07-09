import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {ClientService} from './client.service';
import {Client} from './client';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: []
})
export class ClientComponent implements OnInit {
  @Input() client:Client;
  @Output() clientList = new EventEmitter();
  constructor(private clientservice: ClientService) {}
  ngOnInit() {}

onRemoveClient(clientID){
this.clientList.emit(this.clientservice.RemoveClient(clientID));
}

}
