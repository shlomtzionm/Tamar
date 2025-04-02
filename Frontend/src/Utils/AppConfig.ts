class AppConfig {

    // Backend urls:
    public readonly backendUrl = "http://localhost:4000/api";

    public readonly clientId = '342916761495-jvl1ltkstds2ovb5341j2r7v22rf6pjt.apps.googleusercontent.com'
 
    //Axios options:
    public readonly axiosOptions = {
        headers: { // Tell axios to also send the image:
            "Content-Type": "multipart/form-data" // We're sending also files.
        }
    };
}

export const appConfig = new AppConfig();
