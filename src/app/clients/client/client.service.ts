import { Client } from './client';
export class ClientService{
   private clients:Client[] = [
// clients of type Client class (object) creates an empty array.
        /*
        {name:"Yuval",age:"21",location:"unknown",imagePath:"./assets/profile.png"},
        {name:"Itay",age:"21",location:"unknown",imagePath:"./assets/profile2.png"},
    */
    ];
    //:{name:string,age:string,location:string,imagePath:string}
    getClients(){
        return this.clients;
         // in order to prevent overwrite of client array
    }
    addClient(client){
        this.clients.push({name:client.name,age:client.age,location:client.location,imagePath:client.imagePath});
       // console.log(this.clients);
    }

    
}