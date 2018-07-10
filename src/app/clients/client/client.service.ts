import { Client } from './client';
export class ClientService{
   private clients:Client[] = [];
   //tracking the number of added users.
   addedClientsCounter:number = 0;


    getClientsList(){
        return this.clients;
    }


    setClientList(clientList:Client[]){
        this.clients = clientList;
    }

    RemoveClient(id:number){
        let users = this.clients;
        const result = users.filter(client => client.id != id);
        this.setClientList(result);
        return result;
    }

    
    addClient(client){
        this.clients.push({id:client.id,name:client.name,age:client.age,location:client.location,imagePath:client.imagePath});
    }
   
    
}