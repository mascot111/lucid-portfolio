export type MockProject = {
  slug: string;
  title: string;
  type: string;
  year: string;
  description: string;
  featured: boolean;
  status: "Active" | "In Development" | "Prototype" | "Research" | "Completed";
};

export const mockProjects: MockProject[] = [
  {
    slug: "amadeus",
    title: "Amadeus",
    type: "Applied AI / Talent Intelligence",
    year: "2026",
    description:
      "An AI-powered talent intelligence system designed to structure and surface evidence of capability across traditional and non-traditional technical talent.",
    featured: true,
    status: "Active",
  },
  {
    slug: "arcfield-discover",
    title: "Arcfield Discover",
    type: "Product / Discovery Systems",
    year: "2026",
    description:
      "A verified local discovery platform built around trustworthy places, structured listings, context, and real-world exploration.",
    featured: true,
    status: "In Development",
  },
  {
    slug: "arc-os",
    title: "Arc-OS",
    type: "AI Infrastructure / Human-AI Systems",
    year: "2026",
    description:
      "A human-AI operating architecture for coordinating knowledge, agents, execution, validation, and long-term system memory.",
    featured: true,
    status: "Research",
  },
  {
    slug: "petvax-v1",
    title: "PetVax V1",
    type: "Product Engineering / Veterinary",
    year: "2026",
    description:
      "The first PetVax implementation for managing pet profiles, vaccination records, appointments, and related veterinary workflows.",
    featured: false,
    status: "Completed",
  },
  {
    slug: "petvax-v2",
    title: "PetVax V2",
    type: "Product Engineering / Veterinary",
    year: "2026",
    description:
      "The next PetVax iteration, evolving the original pet-care product into a more mature system and product architecture.",
    featured: false,
    status: "In Development",
  },
  {
    slug: "auri",
    title: "Auri",
    type: "AI Companion / Arc-OS Interface",
    year: "2026",
    description:
      "An AI companion and visual identity for Arc-OS, exploring how an intelligent system can become a persistent, expressive interface rather than an invisible backend.",
    featured: false,
    status: "Research",
  },
  {
    slug: "arclight",
    title: "Arclight",
    type: "Workflow Systems / Industrial Liaison",
    year: "2026",
    description:
      "A system concept born from investigating the fragmented industrial attachment process, including applications, tracking, supervision, and completion workflows.",
    featured: false,
    status: "Research",
  },
  {
    slug: "edarc",
    title: "Edarc",
    type: "Education / School Systems",
    year: "2026",
    description:
      "A school operations platform spanning administration, assessment, records, teacher workflows, fees, learning support, and inter-school activities.",
    featured: false,
    status: "In Development",
  },
  {
    slug: "arcfield-medic",
    title: "Arcfield Medic",
    type: "Education / Clinical Systems",
    year: "2026",
    description:
      "A structured clinical case-log system designed around student medical training and practical record keeping.",
    featured: false,
    status: "In Development",
  },
  {
    slug: "arcfield-eats",
    title: "Arcfield Eats / BBs Operations",
    type: "Commerce / Operations Systems",
    year: "2026",
    description:
      "A food ordering and operational system combining digital ordering, payments, loyalty, branch workflows, and worker-facing operations.",
    featured: false,
    status: "In Development",
  },
  {
    slug: "quantfx",
    title: "QuantFX",
    type: "Quantitative Research / Markets",
    year: "2026",
    description:
      "A quantitative research system investigating repeatable relationships between time, price, market state, structure, and subsequent price behavior.",
    featured: false,
    status: "Research",
  },
  {
    slug: "salon-booking-system",
    title: "Salon Booking System",
    type: "Client Product / Booking",
    year: "2026",
    description:
      "A booking and appointment system designed around the realities of salon operations, walk-ins, scheduling, and customer communication.",
    featured: false,
    status: "In Development",
  },
];

export const featuredMockProjects = mockProjects.filter(
  (project) => project.featured,
);