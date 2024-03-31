import type { Article } from "@/servers/getArticles";
import { XMLParser } from "fast-xml-parser";
import { z } from "zod";

const rssFeedSchema = z.object({
  rss: z.object({
    channel: z.object({
      item: z.array(
        z.object({
          title: z.string(),
          link: z.string(),
          pubDate: z.string(),
          "media:content": z.object({ "@_url": z.string() }),
        }),
      ),
    }),
  }),
});

const parser = new XMLParser({ ignoreAttributes: false });

const rssUrl = "https://trap.jp/author/cp20/rss/";

export const fetchTrapArticles = async () => {
  const response = await fetch(rssUrl);
  const xml = await response.text();
  const feed = await parser.parse(xml);
  const items = rssFeedSchema.parse(feed).rss.channel.item;

  const articles: Article[] = items.map((item) => ({
    source: "trap.jp",
    url: item.link,
    title: item.title,
    postedAt: new Date(item.pubDate),
    ogImageUrl: item["media:content"]["@_url"],
  }));

  return articles;
};
