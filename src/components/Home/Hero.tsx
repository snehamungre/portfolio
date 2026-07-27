import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

export const Hero = () => {
  const { name, roleTitle, tagline, bioShort } = siteContent;

  return (
    <section className="bg-gradient-to-b from-pink-light/60 to-bg px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-nav text-sm uppercase tracking-widest text-tan sm:text-base">
          {roleTitle}
        </p>
        <h1 className="mt-2 font-heading text-4xl text-accent-dark sm:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="mt-4 font-nav text-lg text-text sm:text-xl">{tagline}</p>
        <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
          {bioShort}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-accent px-6 py-2.5 font-nav text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            View Projects
          </Link>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="rounded-lg border border-accent bg-white px-6 py-2.5 font-nav text-accent-dark transition-colors hover:bg-pink-light"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
