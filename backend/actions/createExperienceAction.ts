"use server";
import { CreateExperienceCommandInput } from "../experiences/command/createExperienceCommand";
import { ExperienceModule } from "../experiences/experience.module";

export const createExperienceAction = async (
  input: CreateExperienceCommandInput
) => {
  await ExperienceModule.CreateExperienceCommand.execute(input);
};
