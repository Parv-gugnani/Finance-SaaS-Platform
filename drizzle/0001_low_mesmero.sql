ALTER TABLE "transactions" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" DROP COLUMN IF EXISTS "plaid_id";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "plaid_id";