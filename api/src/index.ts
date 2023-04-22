import Koa from "koa";
import "reflect-metadata";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import envConfig from "./config/env";
import DatabaseConnection from "./config/database";
import authRouter from "./routes/auth";
import petRouter from "./routes/pet";
import compose from "koa-compose";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "Healthz";
});

app.use(bodyParser());
const apiRoutes = compose([authRouter.routes(), petRouter.routes(), router.routes()]);
app.use(apiRoutes);

const { port, env, isDevelopment } = envConfig.server;

async function connectToDb() {
  try {
    await DatabaseConnection.connect();
    console.log("Connected to database");
    if (DatabaseConnection.getConnection()) {
      await DatabaseConnection.getConnection().synchronize();
      console.log("Schema synchronized successfully.");
    }
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}

connectToDb();
app.listen(port, () => {
  console.log(`Server listening on ${isDevelopment ? "http://localhost:" : "unknown"}${port} on ${env} environment`);
});
