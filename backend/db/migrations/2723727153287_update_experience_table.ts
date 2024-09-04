import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("experience")
    .addColumn("company", "varchar", (col) => col.notNull())
    .addColumn("role", "varchar", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("experience")
    .dropColumn("company")
    .dropColumn("role")
    .execute();
}
