/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";

import { Selectable } from "kysely";
import { Experience } from "kysely-codegen";

import { ExperienceForm } from "./ExperienceForm";
import { ExperienceCard } from "./ExperienceCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  experiences: Selectable<Experience>[];
};

const ExperienceDashboardSection = ({ experiences }: Props) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] border-neutral-600 p-4">
      <Dialog>
        <DialogContent className="w-[1000px]">
          <ExperienceForm />
        </DialogContent>
        <DialogTrigger asChild>
          <Button className="mt-4">Create a new experience</Button>
        </DialogTrigger>
      </Dialog>
      <div className="mt-4">
        {experiences.map((experience) => {
          return <ExperienceCard key={experience.id} experience={experience} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceDashboardSection;
