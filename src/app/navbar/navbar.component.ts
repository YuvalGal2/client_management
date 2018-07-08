import { ClientService } from './../clients/client/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/interval';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  constructor(private clientservice:ClientService) { }
  clientSub:Subscription; // that is responsiable for tracking the subscription in order to unsubscribe
  clients:number = 0; //  default settings of navbar


  ngOnInit() {
    // creating the new observeable in order to track the service counter
  const navNewClientObserveable = new Observable((observer:Observer<number>) => {
      setInterval(() => {
        //every 0.5 sec the observer value changes according to the clientservice.addedClientsCounter
           observer.next(this.clientservice.addedClientsCounter);
          }, 500);
      });


   this.clientSub =  navNewClientObserveable.subscribe((observeClients:number) => {
     // the value of this.clients is now  = addedClientsCounter
      this.clients = observeClients;
    });
}


ngOnDestroy(){
this.clientSub.unsubscribe();
}
  isNavbarCollapsed = true;
}
