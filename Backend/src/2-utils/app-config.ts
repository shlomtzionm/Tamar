import dotenv from "dotenv";

// Load ".env" file into process.env object:
dotenv.config();

class AppConfig {
    public readonly port = process.env.PORT;
    public readonly clientId = process.env.CLIENT_ID;
    public readonly mysqlHost = process.env.MYSQL_HOST;
    public readonly mysqlUser = process.env.MYSQL_USER;
    public readonly mysqlPassword = process.env.MYSQL_PASSWORD;
    public readonly mysqlDatabase = process.env.MYSQL_DATABASE;
    public readonly jwtSecretKey = process.env.JWT_SECRET_KEY;
   

}

export const appConfig = new AppConfig();
