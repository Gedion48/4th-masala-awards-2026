import { AwardCategory } from './types';

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    id: 'health-sector',
    code: '01',
    name: 'Health Sector Award',
    sector: 'Healthcare & Public Well-being',
    shortDescription:
      'Honoring clinical practitioners, health initiatives, and public health advocates who advance community well-being across Kambata.',
    fullDescription:
      'The Health Sector Award recognizes healthcare professionals, clinics, hospital teams, and community health leaders who deliver exceptional medical care, lead preventive health campaigns, and expand healthcare access to underserved populations in the Kambata community.',
    criteria: [
      {
        label: 'Community Health Impact',
        weight: 30,
        description: 'Direct improvement in patient outcomes, preventive health, and community-wide well-being.',
      },
      {
        label: 'Service to Underserved Communities Specifically Women’s and children’s',
        weight: 20,
        description: 'Dedicated maternal, neonatal, pediatric, and vulnerable group outreach in rural Kambata areas.',
      },
      {
        label: 'Professional Excellence & Achievement',
        weight: 15,
        description: 'Demonstrated clinical standards, medical acumen, and distinguished professional record.',
      },
      {
        label: 'Sustainability, Ethics & Community Goodwill',
        weight: 10,
        description: 'Ethical practice, long-term program durability, and trusted community standing.',
      },
      {
        label: 'Leadership & Innovation',
        weight: 5,
        description: 'Pioneering healthcare delivery methods, medical education, or institutional leadership.',
      },
    ],
  },
  {
    id: 'education-sector',
    code: '02',
    name: 'Education Sector Award',
    sector: 'Academic Excellence & Youth Development',
    shortDescription:
      'Celebrating educators, school leaders, and academic mentors building the intellectual future of Kambata.',
    fullDescription:
      'The Education Sector Award honors dedicated teachers, school administrators, educational scholars, and literacy champions whose commitment transforms classrooms, expands learning access, and prepares the next generation of Kambata scholars and civic leaders.',
    criteria: [
      {
        label: 'Educational Impact',
        weight: 30,
        description: 'Measurable advancement in student learning, literacy rates, and educational outcomes.',
      },
      {
        label: 'Student, Youth and children school Development',
        weight: 15,
        description: 'Holistic mentorship, extracurricular enrichment, and educational infrastructure support.',
      },
      {
        label: 'Community Service & Accessibility',
        weight: 15,
        description: 'Expanding inclusive learning opportunities for underprivileged children and remote schools.',
      },
      {
        label: 'Innovation & Leadership',
        weight: 10,
        description: 'Pedagogical creativity, curriculum development, and school community leadership.',
      },
      {
        label: 'Sustainability & Long-Term Contribution',
        weight: 10,
        description: 'Enduring institutional legacy and lasting contribution to education in Kambata.',
      },
    ],
  },
  {
    id: 'social-media-digital',
    code: '03',
    name: 'Social Media & Digital Community Impact Award',
    sector: 'Digital Media & Cultural Visibility',
    shortDescription:
      'Recognizing creators, storytellers, and digital community builders amplifying Kambata voice and unity.',
    fullDescription:
      'This award recognizes digital creators, journalists, community page moderators, and media innovators who leverage digital channels with integrity, constructive discourse, and cultural pride to connect the Kambata diaspora and homeland.',
    criteria: [
      {
        label: 'Kambata Community Impact',
        weight: 30,
        description: 'Fostering unity, constructive community dialogue, and tangible positive social influence.',
      },
      {
        label: 'Culture & Heritage Promotion',
        weight: 15,
        description: 'Authentic celebration and digital archiving of Kambata traditions, language, and heritage.',
      },
      {
        label: 'Positive Influence & Youth Engagement',
        weight: 15,
        description: 'Uplifting young people, inspiring civic engagement, and countering negative misinformation.',
      },
      {
        label: 'Quality & Professionalism',
        weight: 10,
        description: 'Editorial standards, creative production quality, and ethical digital conduct.',
      },
      {
        label: 'Consistency & Sustainability',
        weight: 10,
        description: 'Dedicated longitudinal digital presence, dependable publishing, and sustained community commitment.',
      },
    ],
  },
  {
    id: 'tourism-destination-promotion',
    code: '04',
    name: 'Tourism Destination Promotion Award',
    sector: 'Eco-Tourism, Heritage & Exploration',
    shortDescription:
      'Spotlighting champions showcasing Kambata landscapes, cultural landmarks, and welcoming hospitality.',
    fullDescription:
      'Recognizing tourism entrepreneurs, guides, documentary makers, and conservationists who elevate Mount Ambericho, Ajora Falls, volcanic landscapes, and Kambata cultural heritage into world-class travel destinations that generate dignified local livelihoods.',
    criteria: [
      {
        label: 'Tourism Promotion & Visibility',
        weight: 30,
        description: 'Elevating regional and international awareness of Kambata natural and cultural wonders.',
      },
      {
        label: 'Community Economic Benefit',
        weight: 15,
        description: 'Direct economic stimulation, local vendor empowerment, and sustainable job creation.',
      },
      {
        label: 'Cultural & Heritage Promotion',
        weight: 15,
        description: 'Respectful representation of authentic cultural traditions, cuisine, and living history.',
      },
      {
        label: 'Innovation & Professionalism',
        weight: 10,
        description: 'Exemplary hospitality services, tour packaging, storytelling, and safety standards.',
      },
      {
        label: 'Sustainability & Long-Term Impact',
        weight: 10,
        description: 'Environmental preservation, conservation advocacy, and enduring community pride.',
      },
    ],
  },
  {
    id: 'charity-community-service',
    code: '05',
    name: 'Charity & Community Service Award',
    sector: 'Humanitarian Action & Social Welfare',
    shortDescription:
      'Honoring selflessness, grassroots philanthropy, and volunteer service uplifting the vulnerable.',
    fullDescription:
      'The Charity & Community Service Award pays tribute to philanthropic individuals, community self-help organizations (Iddir/Mahber), and grassroots volunteers who devote their lives and resources to supporting vulnerable families, elders, orphans, and disadvantaged households.',
    criteria: [
      {
        label: 'Direct Community Impact',
        weight: 30,
        description: 'Tangible, verifiable relief, livelihood assistance, and support provided to families in need.',
      },
      {
        label: 'Support for Vulnerable Communities',
        weight: 15,
        description: 'Focused assistance for elderly citizens, orphans, persons with disabilities, and low-income households.',
      },
      {
        label: 'Sustainability & Consistency',
        weight: 15,
        description: 'Sustained, continuous community care over time rather than sporadic one-off activities.',
      },
      {
        label: 'Transparency & Accountability',
        weight: 10,
        description: 'Honest stewardship of resources, ethical operations, and trust across community members.',
      },
      {
        label: 'Community Goodwill & Volunteerism',
        weight: 10,
        description: 'Selfless personal commitment, spirit of volunteerism, and inspiring community solidarity.',
      },
    ],
  },
  {
    id: 'sport-sector',
    code: '06',
    name: 'Sport Sector Awards',
    sector: 'Athletics, Youth Empowerment & Fitness',
    shortDescription:
      'Celebrating athletic distinction, sportsmanship, and physical culture inspiring the youth of Kambata.',
    fullDescription:
      'The Sport Sector Awards recognize athletic excellence across competitive football and community physical fitness, honoring role models whose dedication, sportsmanship, and mentorship inspire health and ambition.',
    criteria: [
      {
        label: 'Sporting Performance & Achievement',
        weight: 25,
        description: 'High-level competitive performance, match excellence, and distinguished athletic record.',
      },
      {
        label: 'Contribution to Kambata Football',
        weight: 25,
        description: 'Representation and advancement of Kambata football clubs, talent development, and regional standing.',
      },
      {
        label: 'Youth Inspiration & Mentorship',
        weight: 15,
        description: 'Positive role modeling, coaching young talent, and encouraging community youth.',
      },
      {
        label: 'Professionalism & Discipline',
        weight: 10,
        description: 'Fair play, exemplary on-pitch conduct, discipline, and respect for teammates and officials.',
      },
      {
        label: 'Community Representation & Goodwill',
        weight: 5,
        description: 'Ambassadorship for the Kambata community on regional, national, and international stages.',
      },
    ],
    subcategories: [
      {
        id: 'male-footballer',
        name: 'Male Footballer Award',
        criteria: [
          { label: 'Sporting Performance & Achievement', weight: 25 },
          { label: 'Contribution to Kambata Football', weight: 25 },
          { label: 'Youth Inspiration & Mentorship', weight: 15 },
          { label: 'Professionalism & Discipline', weight: 10 },
          { label: 'Community Representation & Goodwill', weight: 5 },
        ],
      },
      {
        id: 'female-footballer',
        name: 'Female Footballer Award',
        criteria: [
          { label: 'Sporting Performance & Achievement', weight: 25 },
          { label: 'Contribution to Kambata Football', weight: 25 },
          { label: 'Youth Inspiration & Mentorship', weight: 15 },
          { label: 'Professionalism & Discipline', weight: 10 },
          { label: 'Community Representation & Goodwill', weight: 5 },
        ],
      },
      {
        id: 'gym-fitness',
        name: 'Gym & Fitness Award',
        criteria: [
          { label: 'Community Health & Fitness Impact', weight: 20 },
          { label: 'Achievement & Professional Excellence', weight: 20 },
          { label: 'Kambata Community Goodwill', weight: 20 },
          { label: 'Youth Empowerment', weight: 10 },
          { label: 'Consistency & Professionalism', weight: 10 },
        ],
      },
    ],
  },
  {
    id: 'investment-business',
    code: '07',
    name: 'Investment & Business Contribution Award',
    sector: 'Enterprise, Commerce & Job Creation',
    shortDescription:
      'Honoring visionary entrepreneurs and enterprises investing in Kambata economic resilience and jobs.',
    fullDescription:
      'Recognizing local and diaspora business leaders, agricultural innovators, and commercial investors who direct capital, create dignified employment, and develop sustainable businesses in the Kambata region.',
    criteria: [
      {
        label: 'Economic & Community Impact',
        weight: 30,
        description: 'Direct economic stimulation, value-chain development, and local community revitalization.',
      },
      {
        label: 'Employment & Opportunity Creation',
        weight: 15,
        description: 'Generating fair-wage jobs, youth skills development, and women entrepreneurial opportunities.',
      },
      {
        label: 'Investment in Kambata',
        weight: 15,
        description: 'Tangible capital deployment, regional infrastructure enhancement, and local sourcing.',
      },
      {
        label: 'Innovation & Professionalism',
        weight: 10,
        description: 'Modern business methodologies, technological adoption, and commercial excellence.',
      },
      {
        label: 'Sustainability & Community Goodwill',
        weight: 10,
        description: 'Environmental stewardship, ethical trade practices, and benevolent community sponsorship.',
      },
    ],
  },
  {
    id: 'special-masala-awards',
    code: '08',
    name: 'Special Masala Awards',
    sector: 'Distinguished Lifetime & Cultural Contribution',
    shortDescription:
      'The highest ceremonial honor celebrating enduring legacy, cultural stewardship, and community impact.',
    fullDescription:
      'The Special Masala Awards represent the pinnacle of recognition at the Masala festival. Conferred directly by the Committee, these honors celebrate legendary lifetime service, peace-building, cultural preservation, and transformative community contributions.',
    criteria: [
      {
        label: 'Outstanding Community Contribution',
        weight: 30,
        description: 'A benchmark of selfless service and transformative benefit to the Kambata people.',
      },
      {
        label: 'Long-Term Impact & Legacy',
        weight: 20,
        description: 'Enduring social, cultural, or institutional achievements that stand the test of time.',
      },
      {
        label: 'Inspiration & Empowerment',
        weight: 15,
        description: 'Serving as a beacon of dignity, resilience, and hope for generations of Kambata youth.',
      },
      {
        label: 'Leadership & Integrity',
        weight: 10,
        description: 'Uncompromising ethical character, civic wisdom, and respected community stewardship.',
      },
      {
        label: 'Contribution to Kambata Identity, Unity & Goodwill',
        weight: 5,
        description: 'Strengthening cultural pride, peace, fraternity, and common bonds among all people.',
      },
    ],
    recognitionAreas: [
      'Culture',
      'Tourism',
      'Education',
      'Health',
      'Community Development',
      'Youth Empowerment',
      'Leadership',
      'Peace & Social Cohesion',
      'Lifetime Achievement',
      'Heritage Preservation',
      'Other outstanding community service',
    ],
  },
];
