import { PgTable, text } from "drizzle-orm/pg-core";

export const accounts = PgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});
