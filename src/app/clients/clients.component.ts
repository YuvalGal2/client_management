import { Component, OnInit } from '@angular/core';
import {ClientService} from './client/client.service';
import {Client} from '../clients/client/client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {
clients:Client[] = [];
  constructor(private clientservice: ClientService) {}
  ngOnInit() {
    this.clients = this.clientservice.clients;
  }

}
