import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly port = process.env.PORT;
    public readonly clientId = process.env.CLIENT_ID;


}

export const appConfig = new AppConfig();
