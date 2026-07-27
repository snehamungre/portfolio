import { siteContent } from "../../data/siteContent";

export const ToolSetStrip = () => {
  const { skillsToolset } = siteContent;

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-2xl text-accent-dark sm:text-3xl">
          My Tool Set
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skillsToolset.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-tan/40 bg-yellow/40 px-4 py-1.5 text-sm text-text sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
