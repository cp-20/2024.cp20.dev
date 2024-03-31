import type { Article } from "@/servers/getArticles";
import { z } from "zod";

const noteApiSchema = z.object({
  data: z.object({
    contents: z.array(
      z.object({
        name: z.string(),
        publishAt: z.string(),
        noteUrl: z.string().url(),
        spEyecatch: z.string().url(),
      }),
    ),
  }),
});

const noteApiEndpoint =
  "https://note.com/api/v2/creators/cp20/contents?kind=note&page=1&per=20";

export const fetchNoteArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch(noteApiEndpoint);
    const query = noteApiSchema.parse(await response.json());

    const contents = query.data.contents;

    const articles: Article[] = contents.map((content) => ({
      source: "note.com",
      url: content.noteUrl,
      title: content.name,
      postedAt: new Date(content.publishAt),
      ogImageUrl: content.spEyecatch,
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
