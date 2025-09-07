// src/data/types.ts
export interface Project {
    id: string;
    name: string;
    city: string;
    delivery?: string;
    priceFromUsd?: number;
    pricePerSfApprox?: number;
    rentalPolicy?: string;
    rentalPolicyEs?: string;
    rentalPolicyEn?: string;
    furnished?: boolean;
    hoa?: string;
    slug: string;
    image: string;
    highlights?: string[];
    highlightsEn?: string[];
    microClaimsEs?: string[];
    microClaimsEn?: string[];
    paymentPlanEs?: string[];
    paymentPlanEn?: string[];
    faqsEs?: { q: string; a: string }[];
    faqsEn?: { q: string; a: string }[];
    images?: { src: string; alt?: string }[];
    unitMixEs?: string[];
    unitMixEn?: string[];
    featuresEs?: string[];
    featuresEn?: string[];
    /** 🔥 NUEVO para mapas */
    lat?: number;
    lng?: number;
  }