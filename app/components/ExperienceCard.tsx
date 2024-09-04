import { formatDate } from "@/lib/formatDate";
import { Selectable } from "kysely";
import { Experience } from "kysely-codegen";

/* eslint-disable @next/next/no-img-element */
export const ExperienceCard = ({
  experience,
}: {
  experience: Selectable<Experience>;
}) => {
  const handleOnExperienceClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div
      onClick={() => handleOnExperienceClick(experience.link)}
      key={experience.id}
    >
      <div className="flex gap-4">
        <img
          width={48}
          height={48}
          src={experience.thumbnail}
          alt="experience picture"
        />
        <p>
          {experience.role} - {experience.company}
        </p>
      </div>
      <p>
        <span>{formatDate(experience.dateFrom.toISOString())}</span> -
        <span> {formatDate(experience.dateTo.toISOString())}</span>
      </p>
      <p className="whitespace-pre-line">{experience.text}</p>
    </div>
  );
};
