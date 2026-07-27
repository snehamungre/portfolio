# Portfolio Website — Spec for Claude Code

**Reference format:** single-scroll home page (hero → about → tool set → skill set → featured projects → contact), plus a dedicated Portfolio/Projects page and a Contact page. This spec adapts that structure to your requested pages: **Home, About, Projects (GitHub), Education.**

**Stack:** React 19 + TypeScript 5 (strict) + Vite + Tailwind CSS 4, per `requirements.txt`.
**Deployment target:** GitHub Pages (`https://snehamungre.github.io/portfolio/`).

---

## 1. Fill These In Before Building

```yaml
name: Sneha Mungre
role_title: Data Engineer
tagline: "I build pipelines that turn messy, high-volume data into something usable."
bio_short: |
  I'm a UBC Computer Science grad (Economics minor) focused on data engineering
  and analytics. I've spent my internships building ETL pipelines, streaming
  systems, and BI dashboards for companies like Emirates, Al Ghurair, and Affine AI —
  working with everything from Kafka to Power BI to make data move faster and mean more.
bio_long: |
  My path into data engineering started with a Computer Science degree at UBC,
  paired with an Economics minor that shaped how I think about the "why" behind
  the numbers, not just the "how." Early internships — front-end work at Planview,
  BI reporting at Emirates — showed me I liked the plumbing behind the dashboards
  more than the dashboards themselves. That pulled me toward data engineering:
  building the pipelines, streaming systems, and ETL processes that make good
  analysis possible in the first place. At Affine AI and Al Ghurair, I got to build
  that end-to-end — from Kafka streaming clusters to PySpark pipelines to ML models
  predicting equipment failure. I'm now building toward a full-time data
  engineering or analytics role where I can keep working close to the data itself.
professional_interests:
  - "Data pipeline engineering and ETL/ELT design"
  - "Real-time streaming systems (Kafka, event-driven architecture)"
  - "Analytics engineering and turning raw data into decision-ready insight"
currently_learning:
  - "Apache Airflow orchestration patterns"
  - "Schema evolution and data contracts (Avro / Schema Registry)"
skills_toolset:
  - "Python"
  - "SQL"
  - "PySpark / Spark SQL"
  - "Apache Kafka (KRaft)"
  - "Apache Airflow"
  - "AWS (Lambda, S3, Bedrock)"
  - "Snowflake"
  - "Docker"
skills_soft:
  - "Turning ambiguous stakeholder asks into a concrete data spec"
  - "Explaining technical tradeoffs to non-technical audiences (HR, business teams)"
  - "Debugging distributed systems under real failure conditions (e.g. broker failover testing)"
education:
  - institution: "University of British Columbia"
    credential: "B.Sc., Computer Science (Major), Economics (Minor) — Dean's List"
    dates: "Sept 2020 - May 2025"
    notes: "Relevant coursework: Data Structures & Algorithms, OS, Databases, Software Architecture, Computer Vision, HCI"
contact:
  email: snehamungre@gmail.com
  linkedin:  https://www.linkedin.com/in/snehamungre/
  github: https://github.com/snehamungre"
  resume_pdf:  it is not hosted but just keep placeholder for file
color_scheme: 
Palette: light pink, tan, yellow, pastel red (warm, soft palette —  light background tones with pastel red/pink as accent, tan as a  neutral/grounding color)
color_scheme: |
  Palette: light pink, tan, yellow, pastel red (warm, soft palette —
  light background tones with pastel red/pink as accent, tan as a
  neutral/grounding color)
typography:
  heading_font: "Amarante"       # titles (name, page headers, hero heading)
  nav_link_font: "Edu VIC WA NT Hand"   # nav links / links
  body_font: "Cantarell"         # main body copy, descriptions, paragraphs
  google_fonts_url: "https://fonts.google.com/share?selection.family=Amarante|Cantarell:ital,wght@0,400;0,700;1,400;1,700|Edu+VIC+WA+NT+Hand:wght@400..700%22
```

---

## 2. Site Map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero (name, tagline, bio_short, CTAs) + tool set + featured projects (2-3) + contact strip |
| `/about` | About | Long-form bio, professional interests, currently learning, full skills list |
| `/projects` | Projects | All GitHub projects as cards, each linking out to the repo |
| `/education` | Education | Timeline of institutions/credentials |

This is a 4-page site with client-side routing (React Router), not a single-scroll page — closer to Christina's `Home` + `Portfolio` split than a one-pager, since you asked for distinct sections/pages rather than one long scroll.

---

## 3. Page-by-Page Content Spec

### 3.1 Home (`/`)
Mirrors Christina's top-of-page hero + "My Tool Set" + "Portfolio Brief" preview.

- **Hero:** `name`, `role_title`, `tagline`, `bio_short`. Two CTA buttons: "View Projects" (→ `/projects`) and "Contact Me" (→ mailto or `/#contact`).
- **Tool Set strip:** icon/badge row rendered from `skills_toolset`.
- **Featured Projects:** 2-3 `ProjectCard`s (reuse the Projects page component), pulled from `src/data/projects.ts`, filtered by a `featured: true` flag.
- **Contact strip (footer):** email, LinkedIn, GitHub icons/links from `contact`.

### 3.2 About (`/about`)
- `bio_long` (your journey into tech).
- **Professional interests** — rendered list from `professional_interests`.
- **Key skills & technologies** — full list from `skills_toolset` + `skills_soft`, grouped (Technical / Soft skills).
- **Currently learning** — rendered list from `currently_learning`.

### 3.3 Projects (`/projects`)
One `ProjectCard` per repo, each with: title, one-line description, tech-stack tags, "View on GitHub" link (opens in new tab). Seed data below.

### 3.4 Education (`/education`)
Simple vertical timeline: one `EducationEntry` per item in `education` (institution, credential, dates, notes).

---

## 4. Seed Data — `src/data/projects.ts`

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "crypto-market-analysis",
    title: "Crypto Market Analysis",
    description:
      "End-to-end data engineering pipeline that ingests live cryptocurrency market data from a public REST API, processes it with PySpark, and produces a structured analytics dataset with built-in data quality validations using the DataFrame API and Spark SQL.",
    techStack: ["PySpark", "Spark SQL", "REST API", "Data Quality"],
    githubUrl: "https://github.com/snehamungre/crypto_market_analysis",
    featured: true,
  },
  {
    id: "kafka-ecommerce-platform",
    title: "Kafka E-Commerce Platform",
    description:
      "Scalable Kafka-based pipeline simulating an e-commerce system handling orders, payments, and shipments.",
    techStack: ["Kafka", "Event-Driven Architecture", "Python"],
    githubUrl: "https://github.com/snehamungre/kafka_e-commerce_platform",
    featured: true,
  },
  {
    id: "genhack-remakeit",
    title: "ReMakeIt (GenHack)",
    description:
      "Streamlit app using Amazon Bedrock (Claude 3 Haiku) to generate upcycling ideas from photos/descriptions and sustainable shopping recommendations, with a retrieval-augmented knowledge base on OpenSearch Serverless.",
    techStack: ["Streamlit", "AWS Bedrock", "Claude 3 Haiku", "OpenSearch Serverless"],
    githubUrl: "https://github.com/snehamungre/GenHack",
    featured: false,
  },
];
```

> Note: double-check the `kafka_e-commerce_platform` and `GenHack` repos are public before launch — private repo links will 404 for visitors.

---

## 5. Component List

Per `requirements.txt`: components live in `src/components/<FeatureName>/`, functional only, named exports, Tailwind only, strict TypeScript, no `any`.

| Component | Path | Responsibility |
|---|---|---|
| `Layout` | `src/components/Layout/Layout.tsx` | Nav + footer shell wrapping all pages |
| `Nav` | `src/components/Layout/Nav.tsx` | Links to Home / About / Projects / Education, active-route highlight |
| `Hero` | `src/components/Home/Hero.tsx` | Name, tagline, bio_short, CTA buttons |
| `ToolSetStrip` | `src/components/Home/ToolSetStrip.tsx` | Renders `skills_toolset` as a badge row |
| `ProjectCard` | `src/components/Projects/ProjectCard.tsx` | Single project card (title, description, tags, GitHub link) — reused on Home and Projects |
| `ProjectGrid` | `src/components/Projects/ProjectGrid.tsx` | Maps `projects` (optionally filtered by `featured`) into `ProjectCard`s |
| `AboutContent` | `src/components/About/AboutContent.tsx` | bio_long, interests, skills, currently-learning sections |
| `EducationTimeline` | `src/components/Education/EducationTimeline.tsx` | Maps `education` into `EducationEntry`s |
| `EducationEntry` | `src/components/Education/EducationEntry.tsx` | Single institution/credential/date block |
| `ContactStrip` | `src/components/Contact/ContactStrip.tsx` | Email/LinkedIn/GitHub links, used in footer |

**Types:** `src/types/index.ts` — `Project`, `EducationItem`, `ContactInfo`.

---

## 6. Design Direction

- Fill in `color_scheme` above before building; otherwise Claude Code will default to something generic.
- Responsive: single column on mobile, wider layout (grid for project cards) on desktop — same breakpoint pattern as the course's dashboard/portfolio projects (`md:grid-cols-2 lg:grid-cols-3`).
- No inline styles — Tailwind utility classes only, per `requirements.txt`.

---

## 7. Build Task Prompts (Composer-ready, run in order)

**Task 1 — Scaffold & routing**
```
Tech: React 19, TypeScript 5 (strict), Tailwind CSS 4, Vite, React Router.
Scaffold a 4-page portfolio site with routes: / (Home), /about (About),
/projects (Projects), /education (Education). Create Layout and Nav
components at src/components/Layout/. Set up src/types/index.ts with
Project, EducationItem, and ContactInfo interfaces. Functional components,
named exports only, no default exports, no inline styles, no `any` types.
```

**Task 2 — Data files**
```
Create src/data/projects.ts and src/data/education.ts using the seed data
and types below: [paste Section 4 data + your filled-in `education` list
from Section 1].
```

**Task 3 — ProjectCard + ProjectGrid**
```
Create src/components/Projects/ProjectCard.tsx and ProjectGrid.tsx.
ProjectCard props: project: Project. Renders title, description, tech
stack as tags, and a "View on GitHub" link (opens in new tab,
rel="noopener noreferrer"). ProjectGrid props: projects: Project[].
Grid: 1 col mobile, 2 col tablet, 3 col desktop. Tailwind only, named
exports, strict TypeScript.
```

**Task 4 — Home page**
```
Create src/components/Home/Hero.tsx and ToolSetStrip.tsx, and the Home
page that composes: Hero, ToolSetStrip, a ProjectGrid filtered to
featured projects only, and ContactStrip. Content: [paste your filled-in
name/role_title/tagline/bio_short/skills_toolset from Section 1].
```

**Task 5 — About page**
```
Create src/components/About/AboutContent.tsx and the About page.
Sections: journey into tech (bio_long), professional interests list,
key skills & technologies (grouped technical/soft), currently learning
list. Content: [paste your filled-in About fields from Section 1].
```

**Task 6 — Education page**
```
Create src/components/Education/EducationEntry.tsx and
EducationTimeline.tsx, and the Education page. Renders a vertical
timeline from src/data/education.ts — institution, credential, dates,
notes per entry.
```

**Task 7 — Contact + footer**
```
Create src/components/Contact/ContactStrip.tsx: email (mailto link),
LinkedIn, GitHub icons/links, used in Layout's footer on every page.
Content: [paste your filled-in contact block from Section 1].
```

**Task 8 — Deploy (GitHub Pages)**
```
Push to GitHub on main. In repo Settings → Pages, set Source to "GitHub Actions".
The workflow at .github/workflows/deploy.yml builds Vite and publishes dist/.
Live URL: https://snehamungre.github.io/portfolio/
Confirm all 4 routes (/ , /about, /projects, /education) render correctly post-deploy.
Note: vite.config.ts uses base: '/portfolio/' and React Router uses basename="/portfolio".
```

---

## 8. Open Items

- [ ] Fill in Section 1 (name, bio, education, skills, contact, color scheme)
- [ ] Confirm `kafka_e-commerce_platform` and `GenHack` repos are public
- [ ] Decide whether to include a resume/portfolio PDF download button (Christina's site has one — optional here)
- [ ] Decide profile photo: yes/no, and where to source it
