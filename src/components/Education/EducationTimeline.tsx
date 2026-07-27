import { education } from "../../data/education";
import { EducationEntry } from "./EducationEntry";

export const EducationTimeline = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-heading text-3xl text-accent-dark sm:text-4xl">
        Education
      </h1>
      <ol className="relative mt-10">
        {education.map((entry, index) => (
          <EducationEntry
            key={entry.institution}
            entry={entry}
            isLast={index === education.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};
