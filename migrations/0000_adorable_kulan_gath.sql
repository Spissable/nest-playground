CREATE TABLE IF NOT EXISTS "user_role" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"role_id" integer,
	"active" boolean DEFAULT true,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
