import { appConfig } from "../2-utils/app-config";
import { OAuth2Client, TokenPayload } from "google-auth-library";
import { dal } from "../2-utils/dal";
import { userServices } from "./userServices";
import { UserModel } from "../3-models/userModel";
import { Role } from "../3-models/enums";

class LoginServices {
  public async login(token: string) {
    try {
     
    const payload = await this.verifyGoogleToken(token);
    const userData = await this.getUserByEmail(payload.email);

    if (userData) {
      return userData.role == Role.Admin;
    }

    await this.createNewUser(payload);
    return false; 
    } catch (error:any) {
      console.log("A problem accrued in the process." + error);
      
    }
  }

  private async getUserByEmail(email: string) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [user] = await dal.execute(sql, [email]);
    return user || null;
  }
  private async createNewUser(payload: TokenPayload) {
    const newUser = new UserModel({
      first_name: payload.given_name,
      last_name: payload.family_name,
      email: payload.email,
      role: Role.User,
    });

    await userServices.setNewUser(newUser);
  }

  private async verifyGoogleToken(token: string): Promise<TokenPayload> {
    const client = new OAuth2Client(appConfig.clientId);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: appConfig.clientId,
    });

    const payload = ticket.getPayload();
    return payload;
  }
}

export const loginServices = new LoginServices();
