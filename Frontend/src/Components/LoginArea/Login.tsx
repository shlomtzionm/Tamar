import { useState } from "react";
import { GoogleCredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { appConfig } from "../../Utils/AppConfig";
import { loginServices } from "../../Services/Login/loginServices";

export function Login(): JSX.Element {
  const [isAdmin, setIsAdmin] = useState<boolean>(null);

  async function handleLoginSuccess(res: GoogleCredentialResponse) {
    const token = res.credential;
    const isAdmin = await loginServices.sendToken(token);
 setIsAdmin(isAdmin)
  }

  function handleLoginError() {
    console.log("login failed");
  }



  return (
    <div className="Login">
      <GoogleOAuthProvider clientId={appConfig.clientId}>
        <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
      </GoogleOAuthProvider>
    </div>
  );
}
