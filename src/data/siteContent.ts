import type { SiteContent } from "../types";

export const siteContent: SiteContent = {
  name: "Sneha Mungre",
  roleTitle: "Data Engineer",
  tagline:
    "I build pipelines that turn messy, high-volume data into something usable.",
  bioShort:
    "I'm a UBC Computer Science grad (Economics minor) focused on data engineering and analytics. I've spent my internships building ETL pipelines, streaming systems, and BI dashboards for companies like Emirates, Al Ghurair, and Affine AI — working with everything from Kafka to Power BI to make data move faster and mean more.",
  bioLong:
    "My path into data engineering started with a Computer Science degree at UBC, paired with an Economics minor that shaped how I think about the \"why\" behind the numbers, not just the \"how.\" Early internships — front-end work at Planview, BI reporting at Emirates — showed me I liked the plumbing behind the dashboards more than the dashboards themselves. That pulled me toward data engineering: building the pipelines, streaming systems, and ETL processes that make good analysis possible in the first place. At Affine AI and Al Ghurair, I got to build that end-to-end — from Kafka streaming clusters to PySpark pipelines to ML models predicting equipment failure. I'm now building toward a full-time data engineering or analytics role where I can keep working close to the data itself.",
  professionalInterests: [
    "Data pipeline engineering and ETL/ELT design",
    "Real-time streaming systems (Kafka, event-driven architecture)",
    "Analytics engineering and turning raw data into decision-ready insight",
  ],
  currentlyLearning: [
    "Apache Airflow orchestration patterns",
    "Schema evolution and data contracts (Avro / Schema Registry)",
  ],
  skillsToolset: [
    "Python",
    "SQL",
    "PySpark / Spark SQL",
    "Apache Kafka (KRaft)",
    "Apache Airflow",
    "AWS (Lambda, S3, Bedrock)",
    "Snowflake",
    "Docker",
  ],
  skillsSoft: [
    "Turning ambiguous stakeholder asks into a concrete data spec",
    "Explaining technical tradeoffs to non-technical audiences (HR, business teams)",
    "Debugging distributed systems under real failure conditions (e.g. broker failover testing)",
  ],
  contact: {
    email: "snehamungre@gmail.com",
    linkedin: "https://www.linkedin.com/in/snehamungre/",
    github: "https://github.com/snehamungre",
  },
};
