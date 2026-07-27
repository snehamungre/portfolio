import { siteContent } from "../../data/siteContent";

export const AboutContent = () => {
  const {
    bioLong,
    professionalInterests,
    skillsToolset,
    skillsSoft,
    currentlyLearning,
  } = siteContent;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-heading text-3xl text-accent-dark sm:text-4xl">
        About Me
      </h1>

      <section className="mt-8">
        <h2 className="font-heading text-xl text-accent sm:text-2xl">
          My Journey
        </h2>
        <p className="mt-4 leading-relaxed text-text-muted">{bioLong}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl text-accent sm:text-2xl">
          Professional Interests
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-muted">
          {professionalInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl text-accent sm:text-2xl">
          Key Skills &amp; Technologies
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-nav text-lg text-text">Technical</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-text-muted">
              {skillsToolset.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-nav text-lg text-text">Soft Skills</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-text-muted">
              {skillsSoft.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl text-accent sm:text-2xl">
          Currently Learning
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-muted">
          {currentlyLearning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
