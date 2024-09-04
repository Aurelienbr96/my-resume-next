import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("experience")
    .addColumn("dateFrom", "date", (col) => col.notNull())
    .addColumn("dateTo", "date", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("experience")
    .dropColumn("dateFrom")
    .dropColumn("dateTo")
    .execute();
}
