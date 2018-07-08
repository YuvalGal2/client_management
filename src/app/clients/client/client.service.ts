import { Client } from './client';
export class ClientService{
   private clients:Client[] = [
// clients of type Client class (object) creates an empty array.
        
        {id:0,name:"Yuval",age:"21",location:"unknown",imagePath:"https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/15181125_1303500259672219_7809326168720357861_n.jpg?_nc_cat=0&oh=b6e861db47dd6c849948d297b7c63b6d&oe=5BE442E4"},
        {id:1,name:"Itay",age:"21",location:"unknown",imagePath:"https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/13567279_1084303851609029_7826863339946441772_n.jpg?_nc_cat=0&oh=25f965df8da55f804f6f7b7a48d8fab6&oe=5BACB6D0"},
    
    ];
    // in order to watch the number of clients added from the form component until the nav has rest it.
    addedClientsCounter:number = 0;

    //:{name:string,age:string,location:string,imagePath:string}
    getClients(){
        return this.clients;
         // in order to prevent overwrite of cclientlient array
    }
    /*
    to do : use tommrow in order to fix the id issue (08\07)

    getHighestId(){
        const sortedClients = this.clients.sort((a,b) => return a.id - b.id)
    }*/

    
    addClient(client){
      
        this.clients.push({name:client.name,age:client.age,location:client.location,imagePath:client.imagePath});
       // console.log(this.clients);
    }
   
    
}