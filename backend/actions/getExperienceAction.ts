import { cache } from "react";
import { ExperienceModule } from "../experiences/experience.module";

export const getExperienceAction = cache(() => {
  return ExperienceModule.ExperienceRepository.findAll();
});
