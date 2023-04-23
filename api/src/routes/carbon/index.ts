import Router from "koa-router";
import { scan } from "./controller";

const router = new Router({ prefix: "/carbon" });

router.post("/scan", scan);

export default router;
