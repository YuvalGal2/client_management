import { Component, OnInit } from '@angular/core';
import {ClientService} from './client/client.service';
import {Client} from '../clients/client/client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: []
})
export class ClientsComponent implements OnInit {
clients:Client[] = [];
  constructor(private clientservice: ClientService) {}
  ngOnInit() {
    // when you visit the page the new icon is gone.
    // and the counter is going back to 0
    this.clientservice.addedClientsCounter = 0;
    this.clients = this.clientservice.getClients();
  }

}
