export interface CompanyColorScheme {
  color: string;
  gradient: string;
}

export const companyColors: Record<string, CompanyColorScheme> = {
  Sofomo: { color: "#1a1a1a", gradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)" },
  TriplePoint: { color: "#3b6baa", gradient: "linear-gradient(135deg, #3b6baa 0%, #5a8bc8 100%)" },
  FlexCare: { color: "#7a2048", gradient: "linear-gradient(135deg, #7a2048 0%, #a83058 100%)" },
  Octopus: { color: "#1AB7FC", gradient: "linear-gradient(135deg, #1AB7FC 0%, #4dc9ff 100%)" },
  IQAir: { color: "#d32f2f", gradient: "linear-gradient(135deg, #d32f2f 0%, #ef5350 100%)" },
  Proprio: { color: "#6b5b95", gradient: "linear-gradient(135deg, #6b5b95 0%, #8b7bb5 100%)" },
  BeautyLash: { color: "#d4af37", gradient: "linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)" },
  "AS Service": { color: "#c62828", gradient: "linear-gradient(135deg, #1a1a1a 0%, #c62828 100%)" },
  "Personal Project": { color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" },
};

export const defaultColors: CompanyColorScheme = {
  color: "var(--accent-1)",
  gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
};

export function getCompanyColors(company: string): CompanyColorScheme {
  return companyColors[company] || defaultColors;
}
