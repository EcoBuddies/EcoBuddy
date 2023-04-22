import Koa from "koa";
import "reflect-metadata";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import envConfig from "./config/env";
import DatabaseConnection from "./config/database";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "Healthz";
});

app.use(bodyParser());
app.use(router.routes());

const { port, env, isDevelopment } = envConfig.server;

async function connectToDb() {
  try {
    await DatabaseConnection.connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}

connectToDb();
app.listen(port, () => {
  console.log(`Server listening on ${isDevelopment ? "http://localhost:" : "unknown"}${port} on ${env} environment`);
});
