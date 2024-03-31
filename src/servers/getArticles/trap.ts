import type { Article } from "@/servers/getArticles";
import Parser from "rss-parser";

type CustomField = {
  "media:content": {
    $: {
      url: string;
      medium: "image";
    };
  };
};

const parser = new Parser<unknown, CustomField>({
  customFields: {
    item: ["media:content"],
  },
});

const rssUrl = "https://trap.jp/author/cp20/rss/";

export const fetchTrapArticles = async () => {
  const feed = await parser.parseURL(rssUrl);
  const articles: Article[] = feed.items.map((item) => ({
    source: "trap.jp",
    url: item.link!,
    title: item.title!,
    postedAt: new Date(item.pubDate!),
    ogImageUrl: item["media:content"].$.url,
  }));

  return articles;
};
