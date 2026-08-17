export type Experience = {
  id: number;
  styleType: "work" | "education";
  date: string;
  visible: boolean;
  title: string;
  company?: string | null;
  school?: string | null;
  location: string;
  description: string;
  notes?: string | null;
};

export type Skill = {
  id: number;
  name: string;
  logo: string;
  definition: string;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  definition: string;
  liveUrl: string;
};