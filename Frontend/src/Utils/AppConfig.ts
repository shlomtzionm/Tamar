class AppConfig {

    // Backend urls:
    public readonly backendUrl = "http://localhost:4000/api";

    public readonly clientId = '715392575960-42153ingm34tllkfmls3e5p8g3eh4r48.apps.googleusercontent.com'
 
    //Axios options:
    public readonly axiosOptions = {
        headers: { // Tell axios to also send the image:
            "Content-Type": "multipart/form-data" // We're sending also files.
        }
    };
}

export const appConfig = new AppConfig();
