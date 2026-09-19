export interface PurposeItem {
  number: string;
  title: string;
  description: string;
}

export interface MasalaWeekObjective {
  number: string;
  text: string;
  highlight?: string;
}

export interface MasalaWeekEvent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pillar: string;
  badge: string;
}

export const SITE_CONFIG = {
  edition: '4th',
  eventName: '4th MASALA AWARDS 2026',
  fullTitle: '4th Masala Awards 2026',
  tagline: 'Celebrating Contribution, Service & Excellence in the Kambata Community',
  organizer: 'Visit Kambata Tour & Event Organization',
  organizerMotto: 'Promoting culture. Connecting people. Creating visibility.',
  organizerDescription:
    'Visit Kambata Tour & Event Organization is a Kambata-focused tourism and events organization dedicated to promoting Kambata culture, heritage, tourism destinations, talents, and community initiatives.\n\nThrough media, tourism promotion, cultural programs, competitions, and community-centered events, Visit Kambata works to create greater visibility, opportunities, and pride for the Kambata community.',

  masalaWeek: {
    title: 'Masala Week',
    fullHeading: 'Masala Week – Purpose & Objectives',
    tagline: 'Celebrating & Promoting Mesala, the Kambata New Year',
    purposeLead:
      'Masala Week is organized to celebrate and promote Mesala, the Kambata New Year, while preserving its cultural values, traditions, and celebration practices for present and future generations.',
    purposeBody:
      'The initiative aims to strengthen cultural pride, encourage the younger generation to learn and participate in traditional celebrations, and promote Mesala as an important cultural heritage of the Kambata people.',
    keyObjectives: [
      {
        number: '01',
        text: 'Preserve and promote Kambata cultural values, traditions, and Mesala celebrations.',
        highlight: 'Preserve & Promote Traditions',
      },
      {
        number: '02',
        text: 'Inspire and educate the younger generation to celebrate Mesala with knowledge and pride.',
        highlight: 'Youth Education & Pride',
      },
      {
        number: '03',
        text: 'Promote Mesala nationally and internationally as a significant Kambata cultural celebration.',
        highlight: 'National & Global Visibility',
      },
      {
        number: '04',
        text: 'Encourage wider recognition and documentation of Mesala as an element of intangible cultural heritage, with the long-term aspiration of UNESCO recognition.',
        highlight: 'UNESCO Intangible Heritage Aspiration',
      },
      {
        number: '05',
        text: 'Create platforms that bring together culture, tourism, youth, talent, sports, and community participation.',
        highlight: 'Multifaceted Community Platforms',
      },
    ] as MasalaWeekObjective[],
    majorEvents: [
      {
        id: 'miss-kambata',
        name: 'Miss Kambata Pageant',
        tagline: 'Grace, Cultural Wisdom & Living Heritage',
        description:
          'A prestigious cultural pageant celebrating Kambata young women as cultural ambassadors, showcasing knowledge of indigenous history, language, traditional dress, craftsmanship, and community leadership.',
        pillar: 'Culture, Poise & Identity',
        badge: 'Cultural Pageant',
      },
      {
        id: 'masala-awards',
        name: '4th Masala Awards 2026',
        tagline: 'Excellence, Contribution & Public Service',
        description:
          'The premier annual honors ceremony recognizing exemplary individuals, innovators, and organizations whose outstanding achievements uplift the Kambata community across 8 vital sectors.',
        pillar: 'Honors & Recognition',
        badge: 'Official Awards',
      },
      {
        id: 'masalaa-great-run',
        name: 'Masalaa Great Run',
        tagline: 'Athletics, Youth Vitality & Tourism Gathering',
        description:
          'A vibrant mass-participation athletic gathering welcoming thousands of community members, youth, athletes, and diaspora returnees across scenic highland courses in Kambata.',
        pillar: 'Sports & Community Unity',
        badge: 'Community Marathon',
      },
    ] as MasalaWeekEvent[],
  },

  masalaIntro: {
    headline: 'A celebration of culture, identity, unity, and community heritage.',
    lead: 'Masala is the Kambata New Year, a timeless celebration marking renewal, gratitude, and communal solidarity.',
    body: 'Rooted in ancestral traditions of fellowship, seasonal harvest, and cultural pride, Masala unites Kambata families across the homeland and the global diaspora. The Masala Awards were established as an annual initiative of Visit Kambata Tour & Event Organization to honor those individuals, innovators, and leaders whose exemplary achievements and service embody the highest virtues of the Masala season.',
  },

  purposes: [
    {
      number: '01',
      title: 'Recognize outstanding community contributions',
      description:
        'Honoring individuals and civic champions who selflessly elevate living standards, community welfare, and institutional strength across Kambata.',
    },
    {
      number: '02',
      title: 'Inspire the next generation',
      description:
        'Cultivating ambitious, disciplined role models who motivate Kambata youth to pursue academic excellence, leadership, and public service.',
    },
    {
      number: '03',
      title: 'Celebrate meaningful impact',
      description:
        'Highlighting tangible, measurable social and economic initiatives that create lasting opportunities and resilient local livelihoods.',
    },
    {
      number: '04',
      title: 'Promote Kambata culture & heritage',
      description:
        'Preserving and projecting Kambata’s distinctive language, arts, culinary heritage, sacred geography, and rich historic identity to the world.',
    },
    {
      number: '05',
      title: 'Encourage sustainable development',
      description:
        'Fostering initiatives that balance economic advancement with ecological preservation, ethical governance, and community empowerment.',
    },
    {
      number: '06',
      title: 'Connect achievement with goodwill',
      description:
        'Affirming that true excellence is measured not merely by personal success, but by the generosity, service, and uplift bestowed upon others.',
    },
  ] as PurposeItem[],

  transparency: {
    title: 'Awards with Purpose',
    subtitle: 'A standard of integrity and merit anchored in verifiable impact.',
    statement:
      'The Masala Awards are designed to recognize real contribution, measurable impact, commitment, professionalism, and community service.',
    evidencePolicy:
      'The committee may request supporting evidence from nominees to ensure that evaluation is based on genuine achievements and community impact.',
  },

  culturalThemes: [
    {
      title: 'Mount Ambericho & The Highland Landscape',
      subtitle: 'Sacred geography & tourism heritage',
      summary: 'Towering above the Kambata highlands, Mount Ambericho symbolizes endurance, natural majesty, and the enduring spiritual and cultural heart of the Kambata community.',
    },
    {
      title: 'Masala New Year Celebration',
      subtitle: 'Unity, thanksgiving & ancestral renewal',
      summary: 'Masala heralds the Kambata New Year with traditional ceremonies, communal feasts, cultural dances, and the reconciliation of grievances in the spirit of peace.',
    },
    {
      title: 'Traditional Textile Art & Tibeb',
      subtitle: 'Craftsmanship & living cultural expression',
      summary: 'The intricate woven patterns adorning Kambata traditional garments reflect centuries of artisan craftsmanship, geometry, and pride in cultural identity.',
    },
    {
      title: 'Community Self-Reliance & Solidarity',
      subtitle: 'Living traditions of cooperation',
      summary: 'From agrarian collective labor to time-tested community councils, the Kambata ethos centers mutual aid, respect for elders, and collective progress.',
    },
  ],

  contact: {
    organization: 'Visit Kambata Tour & Event Organization',
    officialNotice:
      'Official communications, partnership inquiries, and ceremony credentials are managed directly by Visit Kambata Tour & Event Organization.',
    inquiryTypes: [
      'Ceremony Attendance & Accreditation',
      'Event Sponsorship & Partnership',
      'Media Inquiries & Press Access',
      'Community Heritage Inquiries',
    ],
    // Structured placeholders (no fake phone/email addresses invented per guidelines)
    locationNote: 'Durame, Kambata Zone & Addis Ababa, Ethiopia',
    inquiryEmailPlaceholder: 'Available via official Visit Kambata channels',
  },
};
