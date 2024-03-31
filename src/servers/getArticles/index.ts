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

export const getArticles = server$(async () => {
  const articles = await Promise.all([
    fetchQiitaArticles(),
    fetchZennArticles(),
    fetchNoteArticles(),
    fetchSizumeArticles(),
    fetchTrapArticles(),
  ]).then((articles) => articles.flat());

  articles.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());

  return articles;
});
