import type { Article } from "@/servers/getArticles";
import { sign } from "@/utils/jwtGhost";
import { z } from "zod";

const getPostsResponseSchema = z.object({
  posts: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
      published_at: z.string(),
      feature_image: z.string().nullable(),
    }),
  ),
});

const searchParams = new URLSearchParams({
  includes: "authors",
  fields: "title,url,feature_image,published_at",
  filter: "authors.name:cp20+status:published+visibility:public",
  limit: "all",
  order: "published_at desc",
});
const apiUrl = new URL("https://blog-admin.trap.jp/ghost/api/admin/posts");
apiUrl.search = searchParams.toString();

const getPosts = async (apiKey: string) => {
  const token = await sign(apiKey);

  const headers = { Authorization: `Ghost ${token}` };
  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }
  const json = await res.json();
  const data = getPostsResponseSchema.parse(json);

  return data.posts;
};

export const fetchTrapArticles = async (apiKey: string) => {
  const posts = await getPosts(apiKey);

  const articles: Article[] = posts.map((post) => ({
    source: "trap.jp",
    url: post.url,
    title: post.title,
    postedAt: new Date(post.published_at),
    ogImageUrl: post.feature_image ?? undefined,
  }));

  return articles;
};
