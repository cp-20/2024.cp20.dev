import type { Article } from "@/servers/getArticles";
import { getArticles } from "@/servers/getArticles";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { CacheControl } from "@builder.io/qwik-city/middleware/request-handler";

export const useArticles = routeLoader$<Article[]>(async ({ cacheControl }) => {
  const settings: CacheControl = {
    public: true,
    staleWhileRevalidate: 60 * 60 * 24 * 1,
    maxAge: 60 * 60,
  };
  cacheControl(settings);
  cacheControl(settings, "CDN-Cache-Control");

  const articles = await getArticles();
  return articles;
});
