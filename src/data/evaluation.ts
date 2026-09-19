export interface EvaluationSystem {
  publicWeight: number;
  committeeWeight: number;
  totalPercentage: number;
  title: string;
  subtitle: string;
  primaryPrinciple: string;
  committeeEvaluationPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  transparencyNotice: string;
}

export const EVALUATION_SYSTEM: EvaluationSystem = {
  publicWeight: 20,
  committeeWeight: 80,
  totalPercentage: 100,
  title: 'How the Awards Are Evaluated',
  subtitle: 'A balanced, rigorous methodology combining community voice with structured institutional scrutiny.',
  primaryPrinciple:
    'Popularity or social-media following alone does not determine the award.',
  committeeEvaluationPillars: [
    {
      title: 'Documented Achievements',
      description: 'Verifiable evidence, service records, and institutional recognition of the nominee’s work.',
      icon: 'FileCheck',
    },
    {
      title: 'Community Impact',
      description: 'Measurable improvement in the lives, opportunities, and welfare of the Kambata community.',
      icon: 'Users',
    },
    {
      title: 'Professionalism & Ethics',
      description: 'Uncompromising integrity, professional standards, and civic goodwill.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Sustainability & Longevity',
      description: 'Long-term viability of the nominee’s contributions and enduring positive influence.',
      icon: 'TrendingUp',
    },
    {
      title: 'Contribution to Kambata Heritage',
      description: 'Upholding and promoting the culture, identity, and shared dignity of the community.',
      icon: 'Award',
    },
  ],
  transparencyNotice:
    'Public voting provides vital community participation, while the Masala Award Committee evaluates nominees based on documented achievements, community impact, professionalism, sustainability, and contribution to the Kambata community. The committee may request supporting evidence from nominees to ensure that evaluation is based on genuine achievements and community impact.',
};
