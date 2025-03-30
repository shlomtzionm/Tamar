import axios from "axios";
import { appConfig } from "../2-utils/app-config";
const { OAuth2Client } = require('google-auth-library');

class UserServices {

public async verifyToken(){
 const   client = new OAuth2Client(appConfig.clientId)

    async function sendToken(req,res){
const {token} = req.body
try {
    const ticker = await client.verifyToken({idToken:token,
        audience:client
    })
} catch (error:any) {
    
}
    }

    axios.post('/auth/google')
}

//   public async register(user: UserModel) {

//     const sql = "insert into users values (default, ?, ?, ?, ?, ?)"
//     user.roleId = Role.User;
//     user.validate();

//     const emailIsUnique = await this.isEmailUnique(user.email);
//     if (!emailIsUnique) {
//       throw new ValidationError("Email is already in use.");
//     }

//   user.password = cyber.hash(user.password)
//     const values = [user.firstName ,user.lastName, user.email ,user.password ,user.roleId] 
//     const info :OkPacketParams = await dal.execute(sql,values)
//     user.id = info.insertId;

//     const likesSQL = `INSERT INTO likes (userId, vacationId, isLiked)
//     SELECT ?, id, false
//     FROM vacations;`
// const likesValues = [ user.id] 
// await dal.execute(likesSQL,likesValues)

//     const token = cyber.generateNewToken(user);
//     return token;
//   }

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


// private async isEmailUnique(email: string): Promise<boolean> {
//   const sql = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
//   const result = await dal.execute(sql, [email]);
//   return result[0].count === 0;
// }
}

export const userServices = new UserServices();
