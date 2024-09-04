import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("experience")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("text", "text", (col) => col.notNull())
    .addColumn("link", "varchar", (col) => col.notNull())
    .addColumn("optLink", "varchar")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("experience").execute();
}
