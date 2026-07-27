import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/education", label: "Education", end: false },
] as const;

export const Nav = () => {
  return (
    <nav className="border-b border-tan/30 bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="font-heading text-xl text-accent-dark transition-colors hover:text-accent sm:text-2xl"
        >
          SM
        </NavLink>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-4">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-1.5 font-nav text-sm transition-colors sm:text-base",
                    isActive
                      ? "bg-pink-light text-accent-dark"
                      : "text-text-muted hover:bg-bg-alt hover:text-text",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
