import { OkPacketParams } from "mysql2";
import { dal } from "../2-utils/dal";
import { ValidationError } from "../3-models/client-errors";
import { Role } from "../3-models/enums";
import { UserModel } from "../3-models/userModel";
import { cyber } from "../2-utils/cyber";

class UserServices {

public async setNewUser(user: UserModel):Promise<void>{
const sql = "insert into users (user_id, first_name, last_name, email, created_at, updated_at, role) values (default, ?, ?, ?, default, default, default)"
user.role = Role.User;
user.validate()

const emailIsUnique: boolean= await this.isEmailUnique(user.email)
if (!emailIsUnique){
  throw new ValidationError("Email is already in use.")
}

const values = [user.first_name, user.last_name,user.email,user.role]
const info: OkPacketParams = await dal.execute(sql,values);
user.user_id = info.insertId
}





  //   public async login(credentials: CredentialsModel) {

  //     credentials.password = cyber.hash(credentials.password);
  //     console.log(cyber.hash(credentials.password))
  //     const sql = `SELECT * FROM users WHERE email = ? and password = ?`

  // const values = [credentials.email, credentials.password]
  //   const users = await dal.execute(sql,values);
  // const user = users[0]
  //     if(!user) throw new UnauthorizedError("email or password are incorrect")
  //       const token  = cyber.generateNewToken(user)
  //     return token
  //   }

  //   public async getAllUsers() {
  //     const sql = "select * from users"
  // const vacations = await dal.execute(sql)
  // return vacations
  // }

  private async isEmailUnique(email: string): Promise<boolean> {
    const sql = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
    const result = await dal.execute(sql, [email]);
    return result[0].count === 0;
  }
}

export const userServices = new UserServices();
