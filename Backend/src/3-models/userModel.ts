import { ValidationError } from "./client-errors";
import { Role } from "./enums";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class UserModel {
  public user_id?: number;
  public  first_name: string;
public  last_name: string;
public  email: string;
public  phone_number?: string;
public address? :string;
public create_at? :string;
public updated_at?:string;
public role?: Role;


public constructor(user:Partial<UserModel>){
  this.user_id = user.user_id;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.role = user.role;
  this.create_at= user.create_at;
  this.updated_at = user.updated_at;
  this.phone_number = user.phone_number;
  this.address = user.address;
  
}

public validate(){
  if (!this.first_name) throw new ValidationError("Missing first name.");
  if (!this.last_name) throw new ValidationError("Missing last name.");
  if (!this.email) throw new ValidationError("Missing email.");
  if (!this.role) throw new ValidationError("Missing role id.");
  if ( !emailRegex.test(this.email)) {
    throw new ValidationError("Invalid email format.");
  }
}
}
