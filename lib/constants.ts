// Global constants for the Direct Care Indy site

export const BUSINESS_INFO = {
  name: "Direct Care Indy",
  physician: "James D. Pike, D.O., FCCP, FACP",
  npi: "NPI: [To be added]", // Add actual NPI when available
  address: {
    street: "7911 N. Michigan Rd.",
    city: "Indianapolis",
    state: "IN",
    zip: "46268",
    full: "7911 N. Michigan Rd., Indianapolis, IN 46268"
  },
  phone: "(317) 956-6288",
  email: "info@directcareindy.com",
  specialties: [
    "Direct Primary Care",
    "Internal Medicine",
    "Pulmonary Medicine"
  ],
  certifications: [
    "Board Certified in Pulmonary Medicine",
    "Board Certified in Internal Medicine"
  ]
};

export const NEIGHBORHOODS = {
  carmel: {
    name: "Carmel",
    zipCode: "46032",
    persona: "High-Complexity Seniors",
    hook: "Longevity, Specialist access, and HSA tax efficiency for Plan G/N owners.",
    description: "Serving Carmel families with specialist-level DPC care, just south of 116th St.",
    proximity: "Conveniently located just south of 116th St. and Meridian, providing easy access for Carmel residents seeking specialist-level primary care.",
    keywords: ["Carmel doctor", "Carmel primary care", "Carmel DPC", "Carmel family doctor", "Carmel internal medicine", "Carmel specialist", "HSA doctor Carmel", "Plan G doctor Carmel"],
    focus: "Specialist DPC for complex chronic care",
    highlights: [
      "Specialist-level care for complex chronic conditions",
      "HSA-eligible memberships for Plan G/N Medicare supplement owners",
      "Direct access to board-certified Internal Medicine and Pulmonary specialist",
      "Proximity to 116th St. and Meridian corridor"
    ]
  },
  zionsville: {
    name: "Zionsville",
    zipCode: "46077",
    persona: "Young Families / Professionals",
    hook: "Pediatric Pulmonary expertise and 24/7 direct specialist access (Spruce).",
    description: "Serving Zionsville families with specialist-level DPC care, conveniently located on Michigan Road.",
    proximity: "Easy access from Zionsville via Michigan Road, bringing expert primary care closer to home.",
    keywords: ["Zionsville doctor", "Zionsville primary care", "Zionsville DPC", "Zionsville family doctor", "Zionsville thyroid doctor", "Zionsville pediatric doctor", "specialist near me"],
    focus: "Family-centered specialty care",
    highlights: [
      "Pediatric Pulmonary expertise for children with respiratory conditions",
      "24/7 direct specialist access via Spruce Health app",
      "Family-centered care with same-day appointments",
      "Located on Michigan Rd./Zionsville Rd. corridor"
    ]
  },
  fishers: {
    name: "Fishers",
    zipCode: "46037",
    persona: "Small Business Owners",
    hook: "The 'Employer ROI' and B2B Occupational Health savings.",
    description: "Serving Fishers families with specialist-level DPC care, accessible from the north side.",
    proximity: "Conveniently located for Fishers residents, offering premium primary care without the premium price.",
    keywords: ["Fishers doctor", "Fishers primary care", "Fishers DPC", "Fishers family doctor", "Fishers internal medicine", "Fishers business health", "Fishers occupational health"],
    focus: "Executive Wellness & Small Business Health",
    highlights: [
      "Employer ROI calculator for small businesses",
      "B2B Occupational Health services",
      "Executive wellness programs",
      "Proximity to I-69/116th St. corridor"
    ]
  },
  geist: {
    name: "Geist",
    zipCode: "46037",
    persona: "High-Net-Worth Families",
    hook: "Premium primary care with specialist credentials, no insurance bureaucracy.",
    description: "Serving Geist families with specialist-level DPC care.",
    proximity: "Conveniently located for Geist residents seeking premium healthcare.",
    keywords: ["Geist doctor", "Geist primary care", "Geist DPC", "Geist family doctor"],
    focus: "Premium Primary Care",
    highlights: [
      "Specialist-level primary care",
      "No insurance bureaucracy",
      "Direct physician access",
      "Wholesale lab and pharmacy pricing"
    ]
  }
};
