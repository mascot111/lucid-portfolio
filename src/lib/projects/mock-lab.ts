export type MockLabEntry = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: "Research" | "Experiment" | "Prototype" | "Concept";
  question: string;
  description: string;
};

export const mockLabEntries: MockLabEntry[] = [
  {
    slug: "auri",
    title: "Auri",
    category: "AI Companion / Human-AI Interface",
    year: "2026",
    status: "Research",
    question:
      "What happens when an AI system becomes a persistent presence rather than an invisible tool?",
    description:
      "An exploration of Auri as the expressive AI companion and interface layer for Arc-OS, combining persistent context, system awareness, identity, memory, and eventually embodied interaction.",
  },
  {
    slug: "self-funding-agent",
    title: "Self-Funding Agent Experiment",
    category: "Autonomous Agents / AI Economics",
    year: "2026",
    status: "Concept",
    question:
      "Can a tightly governed AI agent use limited capital to create enough legitimate value to cover the cost of its own operation?",
    description:
      "A research experiment around bounded autonomous agents that can investigate opportunities, build or sell useful work, track expenditure, measure revenue, and attempt to sustain their own compute, API, and hosting costs under strict controls.",
  },
  {
    slug: "amadeus-lens",
    title: "Amadeus Lens",
    category: "Applied AI / Intelligence Interfaces",
    year: "2026",
    status: "Experiment",
    question:
      "How should a human explore evidence of capability when the underlying information is too complex for a normal profile page?",
    description:
      "An experimental intelligence layer within the wider Amadeus system for navigating talent evidence, relationships, signals, structured capability, and machine-assisted interpretation.",
  },
  {
    slug: "arc-os-governed-autonomy",
    title: "Arc-OS Governed Autonomy",
    category: "Agent Systems / AI Infrastructure",
    year: "2026",
    status: "Research",
    question:
      "How much autonomy can an AI system be given before control, validation, and accountability begin to break down?",
    description:
      "A research direction exploring model routing, tool use, bounded permissions, persistent state, auditability, validation, escalation, kill switches, and staged levels of agent autonomy inside Arc-OS.",
  },
  {
    slug: "past-self-ai",
    title: "Past-Self AI",
    category: "AI Memory / Temporal Interfaces",
    year: "2026",
    status: "Concept",
    question:
      "Could a model preserve enough of a person's thinking, language, and behavior to let their future self meaningfully interact with an earlier version of them?",
    description:
      "A speculative experiment around capturing personality signals, writing, preferences, decision patterns, and context at one point in time, then intentionally freezing that representation for future interaction.",
  },
  {
    slug: "ghanaian-language-model",
    title: "Ghanaian Language Model Experiment",
    category: "Machine Learning / Language",
    year: "2026",
    status: "Concept",
    question:
      "What would it take to build useful language intelligence around Ghanaian languages, local context, and code-switching rather than treating them as an afterthought?",
    description:
      "An early machine learning research direction focused on data collection, multilingual representation, local language understanding, evaluation, and the practical constraints of building language systems for Ghanaian use cases.",
  },
];