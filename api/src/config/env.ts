import dotenv from "dotenv";

dotenv.config();

interface AppConfig {
  db: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  server: {
    port: number;
    env: string;
    isDevelopment: boolean;
  };
  // add more properties here as needed
}

const serverPort = parseInt(process.env.SERVER_PORT ?? "3000", 10);
const nodeEnv = process.env.NODE_ENV ?? "development";

const envConfig: AppConfig = {
  db: {
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "3306", 10),
    username: process.env.DB_USER ?? "user",
    password: process.env.DB_PASSWORD ?? "password",
    database: process.env.DB_DATABASE ?? "db",
  },
  server: {
    port: serverPort,
    env: nodeEnv,
    isDevelopment: nodeEnv === "development",
  },
};

export default envConfig;
