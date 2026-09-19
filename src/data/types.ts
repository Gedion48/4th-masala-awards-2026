export interface EvaluationCriterion {
  label: string;
  weight: number; // percentage, e.g. 30 for 30%
  description?: string;
}

export interface AwardCategory {
  id: string;
  code: string; // e.g. "01"
  name: string;
  shortDescription: string;
  fullDescription: string;
  sector: string;
  criteria: EvaluationCriterion[];
  subcategories?: {
    id: string;
    name: string;
    criteria: EvaluationCriterion[];
  }[];
  recognitionAreas?: string[];
  colorAccent?: string;
}

export interface Nominee {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  name: string;
  titleOrRole?: string;
  photoUrl?: string;
  shortAchievement?: string;
  fullBiography?: string;
  supportingHighlights?: string[];
  nominationYear: number;
}

export interface Winner {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  nomineeId?: string;
  winnerName: string;
  citationTitle: string;
  citationText: string;
  photoUrl?: string;
  year: number;
  announcedAtCeremony: boolean;
}

export interface CeremonySlide {
  categoryId: string;
  categoryName: string;
  code: string;
  subcategoryId?: string;
  subcategoryName?: string;
  nominees: Nominee[];
  winner?: Winner;
}
