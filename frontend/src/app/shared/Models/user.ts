export class User{
    id!:string;
    email!:string;
    name!:string;
    phone!:string;
    enrolled_courses!:string[];
    completed_courses!:string[];
    token!:string;
    isAdmin!:boolean;
};