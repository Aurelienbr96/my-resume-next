import { db } from "../db/kysely-instance";
import { CreateExperienceCommand } from "./command/createExperienceCommand";
import { ExperienceRepository } from "./experience.repository";

export const ExperienceModule = {
  CreateExperienceCommand: new CreateExperienceCommand(
    new ExperienceRepository(db)
  ),
  ExperienceRepository: new ExperienceRepository(db),
};
