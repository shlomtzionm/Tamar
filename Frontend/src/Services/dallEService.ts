import { appConfig } from "../Utils/AppConfig"
import axios from "axios"

class DallEService{

public async generateImage(prompt:string):Promise<string>{
const res = await axios.post<string>(appConfig.backendUrl+"/image",{prompt})
return res.data
}

}

export const dallEService = new DallEService()