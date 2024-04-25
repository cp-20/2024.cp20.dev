import { fetchNoteArticles } from "@/servers/getArticles/note";
import { fetchQiitaArticles } from "@/servers/getArticles/qiita";
import { fetchSizumeArticles } from "@/servers/getArticles/sizume";
import { fetchTrapArticles } from "@/servers/getArticles/trap";
import { fetchZennArticles } from "@/servers/getArticles/zenn";
import { server$ } from "@builder.io/qwik-city";

export type Article = {
  source: "qiita.com" | "zenn.dev" | "trap.jp" | "note.com" | "sizu.me";
  url: string;
  title: string;
  postedAt: Date;
  ogImageUrl: string | undefined;
};

export const getArticles = server$(async function () {
  const getEnv = (key: string): string | undefined =>
    this.platform.env?.[key] ?? process.env[key];
  const ghostApiKey = getEnv("GHOST_ADMIN_API_KEY");
  const qiitaAccessToken = getEnv("QIITA_ACCESS_TOKEN");

  if (!ghostApiKey || !qiitaAccessToken) {
    throw new Error("API key is not set");
  }

  const articles = await Promise.all([
    fetchQiitaArticles(qiitaAccessToken),
    fetchZennArticles(),
    fetchNoteArticles(),
    fetchSizumeArticles(),
    fetchTrapArticles(ghostApiKey),
  ]).then((articles) => articles.flat());

  articles.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());

  return articles;
});
