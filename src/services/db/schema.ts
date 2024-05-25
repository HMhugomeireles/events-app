import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

// export const files = createTable(
//   "files",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),
    
//   }
// );


// export const events = createTable(
//   "events",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),
//     date: timestamp("event_date", { withTimezone: true })
//       .notNull()
//     imageId: 
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//   },
//   (example) => ({
//     createdByIdIdx: index("createdById_idx").on(example.createdById),
//     nameIndex: index("name_idx").on(example.name),
//   })
// );