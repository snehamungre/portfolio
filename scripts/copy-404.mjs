import { copyFileSync } from "node:fs";
import { join } from "node:path";

const distDir = join(import.meta.dirname, "..", "dist");
copyFileSync(join(distDir, "index.html"), join(distDir, "404.html"));
console.log("Copied index.html to 404.html for GitHub Pages SPA routing.");
