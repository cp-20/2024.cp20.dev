export type Certification = {
  label: string;
  year: string;
};

export const certifications = [
  {
    label: "応用情報技術者試験 (AP)",
    year: "2023",
  },
  {
    label: "実用英語技能検定 (英検) 準1級",
    year: "2021",
  },
] satisfies Certification[];
