import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { ContactStrip } from "../Contact/ContactStrip";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-tan/30 bg-bg-alt">
        <ContactStrip />
      </footer>
    </div>
  );
};
