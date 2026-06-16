export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tags: string[];
  accent: "amber" | "green" | "blue"| "purple";
  year: string;
  link?: string;
}

export interface Competition {
  id: number;
  name: string;
  scope: string; // Kudus Regency, Province, or empty
  achievement: string; // 1st Place, Medallion, etc.
  badge: "gold" | "silver" | "green" | "blue";
  description: string;
  year: string;
}

export interface JourneyChapter {
  id: number;
  title: string;
  icon: string; // Emoji character
  description: string;
  tags: string[];
  detailNote?: string;
}

export interface BeyondCodingItem {
  id: number;
  title: string;
  role: string;
  icon: string;
  description: string;
  noteColor: "yellow" | "pink" | "blue" | "green";
}
