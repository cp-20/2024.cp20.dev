export type Career = {
  active: boolean;
  label: string;
  date: string;
  comment?: string;
};

export const careers = [
  {
    active: false,
    label: "生誕",
    date: "2004/11/29",
  },
  {
    active: false,
    label: "渋谷教育学園幕張中学校高等学校 (渋幕)",
    date: "2017/04 - 2023/03",
  },
  {
    active: true,
    label: "東京工業大学 情報理工学院 情報工学系",
    comment: "※系に所属したのは2年次から",
    date: "2023/04 - now",
  },
  {
    active: false,
    label: "株式会社LINE サマーインターン (技術職 ハッカソンコース)",
    comment: "※現在のLINEヤフー株式会社",
    date: "2023/08 - 2023/09",
  },
] satisfies Career[];
