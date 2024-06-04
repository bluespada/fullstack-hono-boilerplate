import { index, pgTable, text, serial, pgSchema } from 'drizzle-orm/pg-core';

export const users = pgTable("res_users", {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    fullName: text("name"),
})
