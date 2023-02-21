import { UserInterface } from "./user.interface";

export interface TaskInterface {
    id:string | number;
    title:string;
    //tags: Array<string>;
    tags:string[];
    user:UserInterface;
    status:'completed' | 'incompleted' | 'in-progress';
}