import { Component, OnInit,Input} from '@angular/core';
import {ClientService} from './client.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {
  @Input() client;
  constructor(private clientservice: ClientService) {}
  ngOnInit() {
  
  }


}
