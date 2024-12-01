export type Award = {
  label: string;
  date: string;
  url: string;
};

export const awards = [
  {
    label: "MIXI Bug Shooting Challenge 優勝",
    date: "2024/12",
    url:
      "https://mixi-recruit.snar.jp/jobboard/detail.aspx?id=-fwHdaAAwGZ-bG-AvP9r2A",
  },
  {
    label: "Web Speed Hackathon 2024 優勝",
    date: "2024/03",
    url: "https://github.com/CyberAgentHack/web-speed-hackathon-2024",
  },
  {
    label: "CA Tech Lounge 2期生 採択",
    date: "2023/08",
    url: "https://www.cyberagent.co.jp/careers/special/students/tech_lounge/",
  },
  {
    label: "SecHack365 2023 採択",
    date: "2023/05",
    url: "https://sechack365.nict.go.jp/",
  },
  {
    label: "第40回千葉市教育・文化・スポーツ等功労者賞",
    date: "2023/03",
    url:
      "https://www.city.chiba.jp/somu/shichokoshitsu/hisho/40kyouikubunkasports.html",
  },
  {
    label: "MAKERS UNIVERSITY U-18 8期生 採択",
    date: "2023/02",
    url: "https://u-18.makers-u.jp/",
  },
  {
    label: "Microsoft Imagine Cup 2022 アジア教育部門優勝",
    date: "2022/03",
    url:
      "https://techcommunity.microsoft.com/t5/student-developer-blog/meet-the-top-3-teams-of-the-2022-imagine-cup/ba-p/3274948",
  },
  {
    label: "第19回高校生高専生科学技術チャレンジ (JSEC) 優秀賞",
    date: "2021/12",
    url: "https://manabu.asahi.com/jsec/2021/award/index.html",
  },
] satisfies Award[];
