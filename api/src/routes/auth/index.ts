import Router from "koa-router";
import { me } from "./controller";

const router = new Router({ prefix: "/auth" });

router.post("/me", me);

export default router;
