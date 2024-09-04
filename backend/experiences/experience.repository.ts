import { Insertable, Kysely, Updateable } from "kysely";
import { DB, Experience } from "kysely-codegen";

export class ExperienceRepository {
  constructor(private readonly db: Kysely<DB>) {}

  create(data: Insertable<Experience>) {
    return this.db.insertInto("experience").values(data).execute();
  }

  findAll() {
    return this.db.selectFrom("experience").selectAll().execute();
  }

  findById(id: number) {
    return this.db
      .selectFrom("experience")
      .selectAll()
      .where("experience.id", "=", id)
      .execute();
  }

  delete(id: number) {
    return this.db
      .deleteFrom("experience")
      .where("experience.id", "=", id)
      .execute();
  }

  update(experience: Updateable<Experience>, id: number) {
    return this.db
      .updateTable("experience")
      .where("experience.id", "=", id)
      .set(experience)
      .execute();
  }
}
