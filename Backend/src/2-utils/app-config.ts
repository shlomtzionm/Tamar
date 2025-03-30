import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly port = process.env.PORT;


}

export const appConfig = new AppConfig();
