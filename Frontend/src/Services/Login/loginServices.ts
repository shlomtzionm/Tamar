import axios from "axios"
import { appConfig } from "../../Utils/AppConfig"

 class LoginServices {

public async sendToken(token:string):Promise<boolean> {
    try {
const res = await axios.post(`${appConfig.backendUrl}/login`,{token})
const data= res.data
console.log(data);

return data   
    } catch (error:any) {
        console.log(error);
        
    }
}

}

export const loginServices = new LoginServices()
