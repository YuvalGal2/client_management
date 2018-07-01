export class ClientService{
    clients = [
        {name:"Yuval",age:"21",location:"unknown",imagePath:"none"},
        {name:"Itay",age:"21",location:"unknown",imagePath:"none"},
    ];
    //:{name:string,age:string,location:string,imagePath:string}
    addClient(client){
        this.clients.push({name:client.name,age:client.age,location:client.location,imagePath:client.imagePath});
       // console.log(this.clients);
    }

}