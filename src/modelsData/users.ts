import { Company } from './company';
import { Adress } from './address';
export class User{
    id: number;
    username: string;
    email : string
    address: Adress;
    phone: string;
    website: string;
    company: Company

    constructor(id: number = 0, username:string = "", email : string="", address: Adress = new Adress(), phone:string = "", website: string = "", company: Company = new Company()){
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}