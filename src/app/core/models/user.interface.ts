import { RolInterface } from "./role.interface";

export interface UserInterface {
    id:string;
    name:string;
    age:number;
    rols:RolInterface[];
}