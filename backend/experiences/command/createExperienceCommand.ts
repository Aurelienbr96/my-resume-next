import { Insertable } from "kysely";
import { ExperienceRepository } from "../experience.repository";
import { Experience } from "kysely-codegen";

export type CreateExperienceCommandInput = { formData: FormData };

export class CreateExperienceCommand {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  execute({ formData }: CreateExperienceCommandInput) {
    const rawFormData: Insertable<Experience> = {
      link: formData.get("link") as string,
      optLink: formData.get("optLink") as string,
      text: formData.get("text") as string,
      dateFrom: formData.get("dateFrom") as string,
      dateTo: formData.get("dateTo") as string,
      thumbnail: formData.get("thumbnail") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
    };

    return this.experienceRepository.create(rawFormData);
  }
}
