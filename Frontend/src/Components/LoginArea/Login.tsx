import { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { appConfig } from "../../Utils/AppConfig";

export function Login(): JSX.Element {

    const [user,serUser] = useState(null)

   function handleLoginSuccess(){
console.log('success');

    }

function handleLoginError(){
console.log('error');

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
