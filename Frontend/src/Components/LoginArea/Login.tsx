import { useState } from "react";
import { GoogleCredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { appConfig } from "../../Utils/AppConfig";
import { loginServices } from "../../Services/Login/loginServices";

export function Login(): JSX.Element {

    const [user,serUser] = useState(null)

   async function handleLoginSuccess(res:GoogleCredentialResponse){
const token = res.credential;
const data = await loginServices.sendToken(token)
console.log(data);

    }

function handleLoginError(){
console.log('login failed');

}

  return (
    <div className="Login">
        <GoogleOAuthProvider clientId={appConfig.clientId}>
<GoogleLogin onSuccess={handleLoginSuccess}
onError={handleLoginError}/>
</GoogleOAuthProvider>
    </div>
  );
}
