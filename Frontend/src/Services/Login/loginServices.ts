import axios from "axios"
import { appConfig } from "../../Utils/AppConfig"

 class LoginServices {

public async sendToken(token:string):Promise<string> {
    try {
const res = await axios.post(`${appConfig.backendUrl}/auth`,{token})
const data= res.data
return data   
    } catch (error:any) {
        console.log("this is catch");
        
    }
}

}

export const loginServices = new LoginServices()
