import { siteContent } from "../../data/siteContent";

export const ContactStrip = () => {
  const { email, linkedin, github } = siteContent.contact;

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-center sm:gap-8">
      <a
        href={`mailto:${email}`}
        className="font-nav text-text-muted transition-colors hover:text-accent"
      >
        {email}
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="font-nav text-text-muted transition-colors hover:text-accent"
      >
        LinkedIn
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="font-nav text-text-muted transition-colors hover:text-accent"
      >
        GitHub
      </a>
    </div>
  );
};
