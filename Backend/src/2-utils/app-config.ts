import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly port = process.env.PORT;
    public readonly apiKey = process.env.API_KEY;
    public readonly  dallE3Url = process.env.DALLE3URL;


}

export const appConfig = new AppConfig();
