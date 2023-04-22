import Router from "koa-router";
import { create } from "./controller";
const router = new Router({ prefix: "/pet" });

router.post("/create", create);

export default router;
