import { LinkCard } from "@/components/card/link-card";
import { Skeletons } from "@/components/lading-sections/articles";
import { Text } from "@/components/ui/text";
import { useArticles } from "@/routes/api/articles";
import { formatDate } from "@/utils/formatDate";
import { Resource, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "投稿された記事一覧 | cp20.dev",
  meta: [
    {
      name: "description",
      content: "しーぴーくんのお手製サイト",
    },
  ],
};

export { useArticles };

export default component$(() => {
  const articles = useArticles();

  return (
    <div class="mx-auto w-full max-w-7xl px-8 py-16">
      <h1 class="my-8 text-center text-4xl font-semibold">投稿した記事一覧</h1>
      <Resource
        value={articles}
        onPending={() => <Skeletons />}
        onRejected={(reason) => (
          <Text class="text-red-500">エラーが発生しました ({reason.name})</Text>
        )}
        onResolved={(articles) => (
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((article) => (
              <LinkCard
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                containerClass="flex flex-1 flex-col justify-between gap-2"
                image={
                  article.ogImageUrl && (
                    <img
                      src={article.ogImageUrl}
                      width={600}
                      height={315}
                      class="aspect-[40/21] w-full object-cover"
                      alt=""
                    />
                  )
                }
              >
                <div class="font-semibold">{article.title}</div>
                <div class="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span> {article.source}</span>
                  <span>{formatDate(article.postedAt, "YYYY-MM-DD")}</span>
                </div>
              </LinkCard>
            ))}
          </div>
        )}
      />
    </div>
  );
});
