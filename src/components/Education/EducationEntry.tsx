import type { EducationItem } from "../../types";

interface EducationEntryProps {
  entry: EducationItem;
  isLast: boolean;
}

export const EducationEntry = ({ entry, isLast }: EducationEntryProps) => {
  const { institution, credential, dates, notes } = entry;

  return (
    <li className="relative pb-10 pl-8">
      {!isLast && (
        <span
          className="absolute left-[7px] top-3 h-full w-0.5 bg-tan/40"
          aria-hidden="true"
        />
      )}
      <span
        className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg"
        aria-hidden="true"
      />
      <p className="font-nav text-sm text-tan">{dates}</p>
      <h3 className="mt-1 font-heading text-xl text-accent-dark">
        {institution}
      </h3>
      <p className="mt-1 font-nav text-base text-text">{credential}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{notes}</p>
    </li>
  );
};
