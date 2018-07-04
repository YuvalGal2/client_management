
import { ClientService } from './clients/client/client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { FormComponent } from './clients/form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
/* ng bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Routes,RouterModule } from '@angular/router';

const routes:Routes = [
  {path:"clients",component:ClientsComponent},
  {path:"",component:HomeComponent},
  {path:"addClient",component:FormComponent},
  {path:"**",redirectTo:"/"}
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
    

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
