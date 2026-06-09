// DPC Content Model - Structured content for Direct Primary Care launch
// This file contains all reusable content objects that power the site

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'included' | 'excluded' | 'add_on';
  pricing?: string;
  icon?: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'transparency' | 'access' | 'quality' | 'cost';
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month';
  description: string;
  target: 'individual' | 'couple' | 'family' | 'business';
  minMembers?: number;
  features: string[];
}

export interface TargetSegment {
  id: string;
  name: string;
  description: string;
  painPoints: string[];
  valueFit: string[];
  priority: number;
}

export interface CTAAction {
  id: string;
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
}

export interface Disclaimer {
  id: string;
  text: string;
  category: 'insurance' | 'age' | 'geographic' | 'medical';
  required: boolean;
}

// Core DPC Content Model
export const DPC_CONTENT = {
  // Brand Identity
  brand: {
    name: 'Pike Medical',
    tagline: 'Specialist-Led Primary Care Without Insurance Hassles',
    subtitle: '90% of your healthcare covered for one flat monthly fee',
    mission: 'Bringing hospital-grade expertise to everyday primary care through our Round Table model',
  },

  // Value Propositions
  valueProps: [
    {
      id: 'no-insurance-hassles',
      title: 'No Insurance Hassles',
      description: 'Skip copays, deductibles, and surprise bills. One flat fee covers 90% of your healthcare needs.',
      icon: 'Shield',
      category: 'transparency' as const,
    },
    {
      id: 'specialist-access',
      title: 'Specialist-Led Care',
      description: 'Board-certified physician oversight with high-access PAs for your daily healthcare needs.',
      icon: 'Stethoscope',
      category: 'quality' as const,
    },
    {
      id: 'transparent-pricing',
      title: 'Wholesale Pricing',
      description: 'Labs for $5-$12, medications at true wholesale prices. No markup, no surprises.',
      icon: 'DollarSign',
      category: 'cost' as const,
    },
    {
      id: '24-7-access',
      title: '24/7 Direct Access',
      description: 'Text your PA directly anytime. Same-day or next-day appointments when you need them.',
      icon: 'MessageSquare',
      category: 'access' as const,
    },
  ] as ValueProposition[],

  // Target Segments
  targetSegments: [
    {
      id: 'small-business',
      name: 'Small Business Employees',
      description: 'Businesses with ≤50 employees seeking affordable health benefits',
      painPoints: [
        'High insurance premiums',
        'Complex benefit administration',
        'Limited access to quality care',
        'Employee healthcare costs',
      ],
      valueFit: [
        'Predictable per-employee membership pricing',
        'No complex insurance paperwork',
        'Direct access to specialist care',
        'Predictable healthcare costs',
      ],
      priority: 1,
    },
    {
      id: 'self-employed',
      name: 'Self-Employed Professionals',
      description: 'Independent professionals and entrepreneurs',
      painPoints: [
        'High individual insurance costs',
        'Limited healthcare access',
        'Deductibles and copays eat into budget',
        'Time away from work for appointments',
      ],
      valueFit: [
        'Individual plans from $99/month',
        'Direct access to care',
        'Transparent pricing',
        'Flexible scheduling',
      ],
      priority: 2,
    },
    {
      id: 'families',
      name: 'Families with Children',
      description: 'Families prioritizing pediatric and preventive care',
      painPoints: [
        'Pediatric care access',
        'Well-child visits and immunizations',
        'Family planning and pregnancy care',
        'Coordinating multiple insurance plans',
      ],
      valueFit: [
        'Family plans for $199/month',
        'Age 13+ (family-inclusive)',
        'Specialist oversight for complex cases',
        '24/7 access for urgent pediatric needs',
      ],
      priority: 3,
    },
  ] as TargetSegment[],

  // Services Catalog
  services: [
    // Included Services (90% Model)
    {
      id: 'included-visits',
      title: 'Included Sick Visits',
      description: 'See your care team for included sick visits based on your membership plan. No co-pays on covered visits.',
      category: 'included' as const,
    },
    {
      id: 'chronic-disease',
      title: 'Chronic Disease Management',
      description: 'Comprehensive care for diabetes, hypertension, asthma, and other chronic conditions.',
      category: 'included' as const,
    },
    {
      id: 'preventive-care',
      title: 'Preventive Care & Wellness',
      description: 'Annual physicals, health screenings, and preventive care to keep you healthy.',
      category: 'included' as const,
    },
    {
      id: 'basic-labs',
      title: 'Basic Lab Work',
      description: 'CBC, CMP, A1C, Lipid Panel at wholesale prices ($5-$12).',
      category: 'included' as const,
      pricing: '$5-$12',
    },
    {
      id: 'immunizations',
      title: 'Immunizations & Injections',
      description: 'Flu shots, travel vaccines, allergy injections, and vitamin B12 at wholesale prices.',
      category: 'included' as const,
    },
    {
      id: 'minor-procedures',
      title: 'Minor Procedures',
      description: 'Stitches, wound care, cryotherapy, skin biopsies, and other in-office procedures.',
      category: 'included' as const,
    },
    {
      id: 'wholesale-pharmacy',
      title: 'Wholesale Pharmacy Access',
      description: 'Common medications at true wholesale prices. Antibiotics for ~$3, statins for ~$5.',
      category: 'included' as const,
      pricing: '$3-$8',
    },
    {
      id: 'direct-communication',
      title: '24/7 Direct Communication',
      description: 'Text your PA directly via our secure platform. Instant responses, no phone tag.',
      category: 'included' as const,
    },
    {
      id: 'specialist-oversight',
      title: 'Specialist Oversight',
      description: 'Dr. Pike reviews complex cases weekly, bringing hospital-grade expertise to primary care.',
      category: 'included' as const,
    },

    // Excluded Services (10% - Insurance Domain)
    {
      id: 'hospitalizations',
      title: 'Hospitalizations',
      description: 'Emergency room visits, inpatient stays, and hospital care.',
      category: 'excluded' as const,
    },
    {
      id: 'surgeries',
      title: 'Surgeries',
      description: 'Surgical procedures and operating room services.',
      category: 'excluded' as const,
    },
    {
      id: 'specialist-referrals',
      title: 'Specialist Referrals',
      description: 'Referrals to specialists outside our Round Table model.',
      category: 'excluded' as const,
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      description: 'Emergency room visits and ambulance services.',
      category: 'excluded' as const,
    },
    {
      id: 'advanced-imaging',
      title: 'Advanced Imaging',
      description: 'MRI, CT scans, and other advanced diagnostic imaging.',
      category: 'excluded' as const,
    },
  ] as ServiceItem[],

  // Pricing Tiers
  pricingTiers: [
    {
      id: 'individual',
      name: 'Individual',
      price: 99,
      period: 'month' as const,
      description: 'Perfect for self-employed professionals and individuals',
      target: 'individual' as const,
      features: [
        'Included sick visits based on your plan',
        'Preventive care & wellness',
        'Wholesale labs & pharmacy',
        '24/7 direct access',
        'Specialist oversight',
      ],
    },
    {
      id: 'couple',
      name: 'Couple',
      price: 149,
      period: 'month' as const,
      description: 'Ideal for couples seeking comprehensive care',
      target: 'couple' as const,
      features: [
        'All Individual features',
        'Coverage for both partners',
        'Family planning support',
        'Coordinated care planning',
      ],
    },
    {
      id: 'family',
      name: 'Family',
      price: 199,
      period: 'month' as const,
      description: 'Complete family healthcare coverage',
      target: 'family' as const,
      features: [
        'All Couple features',
        'Children 13+ included',
        'Pediatric care coordination',
        'Family health planning',
      ],
    },
    {
      id: 'business',
      name: 'Business (per employee)',
      price: 69,
      period: 'month' as const,
      description: 'Small business health benefits (≤50 employees)',
      target: 'business' as const,
      minMembers: 3,
      features: [
        'All Individual features',
        'Business enrollment management',
        'FSA/HSA compatible',
        'Volume discounts available',
      ],
    },
  ] as PricingTier[],

  // CTAs
  ctas: [
    {
      id: 'join-now',
      text: 'Join the Table',
      href: '/join',
      variant: 'primary' as const,
      size: 'lg' as const,
    },
    {
      id: 'view-pricing',
      text: 'View Pricing',
      href: '/membership',
      variant: 'secondary' as const,
      size: 'md' as const,
    },
    {
      id: 'learn-more',
      text: 'Learn More',
      href: '/how-it-works',
      variant: 'outline' as const,
      size: 'md' as const,
    },
  ] as CTAAction[],

  // Disclaimers
  disclaimers: [
    {
      id: 'not-insurance',
      text: 'This is not insurance. This is direct primary care. We handle 90% of your healthcare needs. Insurance covers the 10%.',
      category: 'insurance' as const,
      required: true,
    },
    {
      id: 'age-restriction',
      text: 'Open to individuals 13 years and older. No upper age limit.',
      category: 'age' as const,
      required: true,
    },
    {
      id: 'geographic-limit',
      text: 'Currently serving the Indianapolis metro area, with focus on NW Indianapolis.',
      category: 'geographic' as const,
      required: false,
    },
    {
      id: 'hsa-eligible',
      text: 'HSA-eligible for qualifying individuals 55+. FSA-eligible for businesses.',
      category: 'medical' as const,
      required: false,
    },
  ] as Disclaimer[],

  // Round Table Model
  roundTable: {
    title: 'The Round Table Model',
    subtitle: '90% Daily Care + 10% Specialist Oversight',
    paRole: {
      title: 'Your PA (90% of Care)',
      responsibilities: [
        '24/7 direct text communication',
        'Same-day/next-day appointments',
        'Routine sick visits',
        'Preventive care and wellness',
        'Chronic disease management',
        'Basic labs and immunizations',
        'Minor procedures',
        'Pharmacy coordination',
      ],
    },
    physicianRole: {
      title: 'Dr. Pike (10% of Care)',
      responsibilities: [
        'Weekly case reviews',
        'Complex diagnostic oversight',
        'Specialist-level guidance',
        'Hospital-grade expertise',
        'Pulmonary and critical care',
        'Complex internal medicine',
        'Quality assurance',
      ],
    },
  },

  // FAQ Categories
  faqCategories: [
    {
      id: 'insurance',
      title: 'Insurance & Coverage',
      questions: [
        'Is this insurance?',
        'Do I still need health insurance?',
        'What does insurance cover?',
        'Is this HSA/FSA eligible?',
      ],
    },
    {
      id: 'services',
      title: 'Services & Care',
      questions: [
        'What services are included?',
        'How do I get care?',
        'What about emergencies?',
        'Can children be members?',
      ],
    },
    {
      id: 'pricing',
      title: 'Pricing & Payments',
      questions: [
        'How much does it cost?',
        'When do payments start?',
        'Can I cancel anytime?',
        'Are there hidden fees?',
      ],
    },
  ],
} as const;

// Helper functions for content access
export const getValuePropsByCategory = (category: ValueProposition['category']) =>
  DPC_CONTENT.valueProps.filter(vp => vp.category === category);

export const getServicesByCategory = (category: ServiceItem['category']) =>
  DPC_CONTENT.services.filter(service => service.category === category);

export const getPricingTiersByTarget = (target: PricingTier['target']) =>
  DPC_CONTENT.pricingTiers.filter(tier => tier.target === target);

export const getDisclaimersByCategory = (category: Disclaimer['category']) =>
  DPC_CONTENT.disclaimers.filter(disclaimer => disclaimer.category === category);

export const getCTAById = (id: string) =>
  DPC_CONTENT.ctas.find(cta => cta.id === id);
