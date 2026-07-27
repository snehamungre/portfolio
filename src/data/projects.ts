import type { Project } from "../types";

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
    techStack: [
      "Streamlit",
      "AWS Bedrock",
      "Claude 3 Haiku",
      "OpenSearch Serverless",
    ],
    githubUrl: "https://github.com/snehamungre/GenHack",
    featured: false,
  },
];
