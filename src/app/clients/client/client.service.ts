import { Client } from './client';
export class ClientService{
    clients:Client[] = [/*
        {name:"Yuval",age:"21",location:"unknown",imagePath:"./assets/profile.png"},
        {name:"Itay",age:"21",location:"unknown",imagePath:"./assets/profile2.png"},*/
    ];
    //:{name:string,age:string,location:string,imagePath:string}
    addClient(client){
        this.clients.push({name:client.name,age:client.age,location:client.location,imagePath:client.imagePath});
       // console.log(this.clients);
    }

}