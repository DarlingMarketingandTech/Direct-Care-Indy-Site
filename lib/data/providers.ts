import { cloudinaryAssets } from "@/lib/cloudinary";

export interface Provider {
  slug: string;
  name: string;
  credentials: string;
  role: "Medical Director" | "Lead PA";
  image: string;
  bio: string;
  highlights: string[];
  carePhilosophy?: string;
  idealFor?: string[];
  specialties?: string[];
  education?: string[];
  certifications?: string[];
  affiliations?: string[];
  personalNote?: string;
}

export const PROVIDERS: Provider[] = [
  {
    slug: "james-pike",
    name: "James D. Pike",
    credentials: "D.O., FCCP, FACP",
    role: "Medical Director",
    image: cloudinaryAssets.providerJames,
    bio: "Dr. James D. Pike brings over three decades of medical expertise to Direct Care Indy, combining specialist-level training with a commitment to accessible primary care. A 1984 graduate of Kansas City University of Medicine and Biosciences, Dr. Pike served as a U.S. Army physician for 10 years, where he honed his skills in complex care management and emergency medicine. As Chief Medical Officer and Medical Director, Dr. Pike provides weekly case reviews and specialist oversight for every Direct Care Indy member.",
    carePhilosophy:
      "Dr. Pike believes members deserve both everyday access and specialist-level judgment behind the scenes. His role is to support the PA team with oversight, complex-case review, and clinical leadership—not to replace the relationship members build with their primary clinician.",
    idealFor: [
      "Members with pulmonary or complex chronic conditions",
      "Patients who want specialist oversight behind everyday primary care",
      "Households looking for experienced clinical leadership at one local clinic",
    ],
    highlights: [
      "Triple board-certified in Internal Medicine, Pulmonary Medicine, and Critical Care Medicine",
      "10 years of service as a U.S. Army physician",
      "Chief Medical Officer and Medical Director at Direct Care Indy",
      "Fellow of the American College of Chest Physicians (FCCP)",
      "Fellow of the American College of Physicians (FACP)",
      "Specialist-level expertise in pulmonary conditions, COPD, and complex chronic disease management",
    ],
    specialties: [
      "Internal Medicine",
      "Pulmonary Medicine",
      "Critical Care Medicine",
      "Complex Chronic Disease Management",
      "COPD and Respiratory Conditions",
    ],
    education: ["Kansas City University of Medicine and Biosciences, D.O. (1984)"],
    certifications: [
      "Board Certified in Internal Medicine",
      "Board Certified in Pulmonary Medicine",
      "Board Certified in Critical Care Medicine",
    ],
    affiliations: [
      "Fellow, American College of Chest Physicians (FCCP)",
      "Fellow, American College of Physicians (FACP)",
    ],
  },
  {
    slug: "karina-white",
    name: "Karina White",
    credentials: "PA-C, DMS",
    role: "Lead PA",
    image: cloudinaryAssets.providerKarina,
    bio: "Karina White, PA-C, DMS brings exceptional clinical expertise and academic leadership to Direct Care Indy. As a Doctor of Medical Science (DMS), Karina represents the highest level of PA education, combining advanced clinical training with a deep understanding of evidence-based medicine.",
    carePhilosophy:
      "Karina focuses on preventive care, clear communication, and evidence-based decisions that fit each patient's life. She values continuity—getting to know members over time so care feels practical, not transactional.",
    idealFor: [
      "Adults focused on prevention and chronic disease management",
      "Patients who want a clinician with advanced PA training and teaching experience",
      "Members who value thoughtful, relationship-based primary care",
    ],
    highlights: [
      "Doctor of Medical Science (DMS) — highest level of PA education",
      "Clinical Professor at Butler University, training the next generation of healthcare providers",
      "Expert in primary care, preventive medicine, and chronic disease management",
      "Committed to whole-patient, relationship-based care",
    ],
    specialties: [
      "Primary Care",
      "Preventive Medicine",
      "Chronic Disease Management",
      "Women's Health",
    ],
    education: ["Doctor of Medical Science (DMS)", "Master of Physician Assistant Studies"],
    certifications: ["Certified Physician Assistant (PA-C)"],
    affiliations: ["Clinical Professor, Butler University"],
  },
  {
    slug: "chase-keirn",
    name: "Chase Keirn",
    credentials: "PA-C",
    role: "Lead PA",
    image: cloudinaryAssets.providerChase,
    bio: "Chase Keirn, PA-C brings specialized expertise in general pulmonology to Direct Care Indy, with a particular focus on lung nodules and respiratory conditions. Working in tandem with Dr. James D. Pike, D.O., FCCP, FACP on complex pulmonary cases, Chase provides expert evaluation and management of lung nodules and respiratory conditions. As the Health Center Director at Marian University, Chase combines clinical excellence with administrative leadership, ensuring comprehensive care for his patients.",
    carePhilosophy:
      "Chase pairs accessible primary care with respiratory expertise, coordinating closely with Dr. Pike when pulmonary questions arise. His goal is to help members understand their options clearly and move forward with confidence.",
    idealFor: [
      "Patients with respiratory symptoms or lung nodule follow-up needs",
      "Members who want pulmonary-aware primary care with specialist backup",
      "Adults managing ongoing lung or breathing-related concerns",
    ],
    highlights: [
      "Specialized focus in General Pulmonology",
      "Works in tandem with Dr. Pike on lung nodule and pulmonary cases",
      "Expert in lung nodule evaluation and management",
      "Health Center Director at Marian University",
      "Dedicated to accessible, high-quality primary care",
    ],
    specialties: [
      "General Pulmonology",
      "Lung Nodule Evaluation",
      "Respiratory Medicine",
      "Primary Care",
    ],
    education: ["Master of Physician Assistant Studies"],
    certifications: ["Certified Physician Assistant (PA-C)"],
    affiliations: ["Health Center Director, Marian University"],
  },
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return PROVIDERS.find((provider) => provider.slug === slug);
}

export function getMedicalDirector(): Provider | undefined {
  return PROVIDERS.find((provider) => provider.role === "Medical Director");
}

export function getLeadPAs(): Provider[] {
  return PROVIDERS.filter((provider) => provider.role === "Lead PA");
}

export function getOtherProviders(slug: string, limit = 3): Provider[] {
  return PROVIDERS.filter((provider) => provider.slug !== slug).slice(0, limit);
}
