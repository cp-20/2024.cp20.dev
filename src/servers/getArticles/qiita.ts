import type { Article } from "@/servers/getArticles";
import { z } from "zod";

const envSchema = z.object({ QIITA_ACCESS_TOKEN: z.string() });
const { QIITA_ACCESS_TOKEN } = envSchema.parse(process.env);

const qiitaArticleSchema = z.array(
  z.object({
    title: z.string(),
    created_at: z.string(),
    url: z.string(),
  }),
);

export const ogImageFetcher = async (url: string) => {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${QIITA_ACCESS_TOKEN}` },
  });
  const text = await response.text();
  const ogImageUrl = text.match(
    /<meta property="og:image" content="(.+?)">/,
  )?.[1];
  return ogImageUrl && ogImageUrl.replaceAll("&amp;", "&");
};

const qiitaApiEndpoint =
  "https://qiita.com/api/v2/users/cp20/items?per_page=100";

// FIXME: 100件までしか取得できない
export const fetchQiitaArticles = async (): Promise<Article[]> => {
  const requestUrl = qiitaApiEndpoint;

  try {
    const response = await fetch(requestUrl, {
      headers: { Authorization: `Bearer ${QIITA_ACCESS_TOKEN}` },
    });
    const jsonResponse = await response.json();
    const qiitaArticles = qiitaArticleSchema.parse(jsonResponse);

    const ogImageUrls = await Promise.all(
      qiitaArticles.map((a) => ogImageFetcher(a.url)),
    );

    const articles: Article[] = qiitaArticles.map((article, i) => ({
      source: "qiita.com",
      url: article.url,
      title: article.title,
      postedAt: new Date(article.created_at),
      ogImageUrl: ogImageUrls[i],
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
