import type { Article } from "@/servers/getArticles";

// TODO: 記事取得のAPIが支援者限定なのでとりあえずハードコード
export const fetchSizumeArticles = async (): Promise<Article[]> => {
  const articles: Article[] = [
    {
      source: "sizu.me",
      url: "https://sizu.me/cp20/posts/otkeh9ivc9mu",
      title: "行動すれば人は変われる【2023まとめ & 2024抱負】",
      postedAt: new Date("2024-01-05T12:01:13.580+09:00"),
      ogImageUrl:
        "https://static.sizu.me/api/og-image/528fa40b678a?avatarUrl=https%3A%2F%2Fr2.sizu.me%2Fusers%2F452%2Favatar.png%3Fv%3D1700030367107&theme=user&username=cp20",
    },
  ];

  return articles;
};
