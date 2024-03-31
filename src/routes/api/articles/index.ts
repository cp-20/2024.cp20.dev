import type { Article } from "@/servers/getArticles";
import { getArticles } from "@/servers/getArticles";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import type { CacheControl } from "@builder.io/qwik-city/middleware/request-handler";

export const onGet: RequestHandler = async ({ cacheControl, json, status }) => {
  const settings: CacheControl = {
    public: true,
    staleWhileRevalidate: 60 * 60 * 24 * 1,
    maxAge: 60 * 60,
  };
  cacheControl(settings);
  cacheControl(settings, "CDN-Cache-Control");

  try {
    const articles = await getArticles();
    json(200, articles);
  } catch (err) {
    status(500);
  }
};

export const useArticles = routeLoader$<Article[]>(async () => {
  return await fetch("/api/articles").then((res) => res.json());
});
