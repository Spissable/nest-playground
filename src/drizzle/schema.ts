import { integer, serial, text, pgTable, boolean } from 'drizzle-orm/pg-core';
import { InferModel, relations } from 'drizzle-orm';

export const users = pgTable('user', {
  id: serial('id').primaryKey(),
  email: text('email').unique(),
  role_id: integer('role_id'),
  active: boolean('active').default(true),
});

export const user_role = pgTable('user_role', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

export const usersRelations = relations(users, ({ one }) => ({
  user_role: one(user_role, {
    fields: [users.role_id],
    references: [user_role.id],
  }),
}));

export type User = InferModel<typeof users>;
export type UserRole = InferModel<typeof user_role>;
