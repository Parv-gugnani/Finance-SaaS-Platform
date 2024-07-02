import { accounts } from "@/db/schema";
import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  return c.json({ accounts: [] });
});

export default app;
