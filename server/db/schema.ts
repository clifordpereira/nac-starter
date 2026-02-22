import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    status: text('status', { enum: ['active', 'inactive'] }).default('active'),
    email: text().notNull().unique(),
    password: text().notNull(),
    avatar: text().notNull(),
    createdAt: integer({ mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})
