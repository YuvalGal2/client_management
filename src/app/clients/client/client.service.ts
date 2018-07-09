import { Client } from './client';
export class ClientService{
    // in order to watch the number of clients added from the form component until the nav has rest it.
    //:{name:string,age:string,location:string,imagePath:string}
   private clients:Client[] = [];
   addedClientsCounter:number = 0;

    getClientsList(){
    // console.log(this.clients);
    return this.clients;
    }
    setClientList(clientList:Client[]){
        this.clients = clientList;
        console.log(this.clients);
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