export type ExperienceItem = {
  position: string;
  company: string;
  // Wrap text in **...** to highlight it, e.g. "**200+ screens** improved".
  highlights: string[];
  period: string;
};

const COMPANY = "@ Panasonic Information Systems · Osaka, Japan";

export const EXPERIENCES: ExperienceItem[] = [
  {
    position: "Software Developer",
    company: COMPANY,
    highlights: [
      "**200 screens** migrated from IE to Edge",
      "**1,000+ users** supported",
      "**5 years** of enterprise experience",
    ],
    period: "Aug 2020 - Mar 2025",
  },
  {
    position: "IT Service Desk Team Lead",
    company: COMPANY,
    highlights: [
      "**7-member** team",
      "Enterprise support operations",
      "Cross-team coordination",
    ],
    period: "Apr 2025 - Dec 2025",
  },
];
