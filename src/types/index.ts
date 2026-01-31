export interface ProjectItem {
  id: string;
  company: string;
  project: string;
  visibility: string;
  url: string | null;
  location: string;
  startDate: string;
  endDate: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  technologies: string[];
  features?: string[];
  projectImage: string;
  projectLogo: string | null;
  isPersonal: boolean;
  showcaseOrder: number;
}
